import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Map "mo:core/Map";
import Set "mo:core/Set";
import Principal "mo:core/Principal";

actor {
  // Admin management
  let admins = Set.empty<Principal>();
  var adminInitialized = false;

  public shared ({ caller }) func setAdmin(p : Principal) : async () {
    if (not adminInitialized) {
      admins.add(caller);
      adminInitialized := true;
    };
    if (not admins.contains(caller)) {
      Runtime.trap("Not authorized");
    };
    admins.add(p);
  };

  public query func isAdmin(p : Principal) : async Bool {
    admins.contains(p);
  };

  func requireAdmin(caller : Principal) {
    if (not admins.contains(caller)) {
      Runtime.trap("Not authorized: admin only");
    };
  };

  // Events
  type Event = {
    id : Nat;
    titleHindi : Text;
    titleEnglish : Text;
    date : Time.Time;
    description : Text;
    location : Text;
  };

  let events = Map.empty<Nat, Event>();
  var nextEventId = 1;

  public shared ({ caller }) func addEvent(titleHindi : Text, titleEnglish : Text, date : Time.Time, description : Text, location : Text) : async Nat {
    let id = nextEventId;
    let event : Event = { id; titleHindi; titleEnglish; date; description; location };
    events.add(id, event);
    nextEventId += 1;
    id;
  };

  public shared ({ caller }) func updateEvent(id : Nat, titleHindi : Text, titleEnglish : Text, date : Time.Time, description : Text, location : Text) : async () {
    requireAdmin(caller);
    switch (events.get(id)) {
      case (null) { Runtime.trap("Event not found") };
      case (?_) {
        let updated : Event = { id; titleHindi; titleEnglish; date; description; location };
        events.add(id, updated);
      };
    };
  };

  public shared ({ caller }) func deleteEvent(id : Nat) : async () {
    requireAdmin(caller);
    events.remove(id);
  };

  public query func getAllEvents() : async [Event] {
    events.values().toArray();
  };

  public query func getEvent(id : Nat) : async Event {
    switch (events.get(id)) {
      case (null) { Runtime.trap("Event not found") };
      case (?event) { event };
    };
  };

  // Announcements
  type Announcement = {
    id : Nat;
    title : Text;
    content : Text;
    date : Time.Time;
  };

  let announcements = Map.empty<Nat, Announcement>();
  var nextAnnouncementId = 1;

  public shared ({ caller }) func addAnnouncement(title : Text, content : Text) : async Nat {
    let announcement : Announcement = {
      id = nextAnnouncementId;
      title;
      content;
      date = Time.now();
    };
    announcements.add(nextAnnouncementId, announcement);
    let currentId = nextAnnouncementId;
    nextAnnouncementId += 1;
    currentId;
  };

  public shared ({ caller }) func updateAnnouncement(id : Nat, title : Text, content : Text) : async () {
    requireAdmin(caller);
    switch (announcements.get(id)) {
      case (null) { Runtime.trap("Announcement not found") };
      case (?existing) {
        let updated : Announcement = { id; title; content; date = existing.date };
        announcements.add(id, updated);
      };
    };
  };

  public shared ({ caller }) func deleteAnnouncement(id : Nat) : async () {
    requireAdmin(caller);
    announcements.remove(id);
  };

  public query func getAllAnnouncements() : async [Announcement] {
    announcements.values().toArray();
  };

  public query func getAnnouncement(id : Nat) : async Announcement {
    switch (announcements.get(id)) {
      case (null) { Runtime.trap("Announcement not found") };
      case (?a) { a };
    };
  };

  // Gallery
  type GalleryItem = {
    id : Nat;
    title : Text;
    imageUrl : Text;
  };

  let gallery = Map.empty<Nat, GalleryItem>();
  var nextGalleryId = 1;

  public shared ({ caller }) func addGalleryItem(title : Text, imageUrl : Text) : async Nat {
    let item : GalleryItem = { id = nextGalleryId; title; imageUrl };
    gallery.add(nextGalleryId, item);
    let currentId = nextGalleryId;
    nextGalleryId += 1;
    currentId;
  };

  public shared ({ caller }) func updateGalleryItem(id : Nat, title : Text, imageUrl : Text) : async () {
    requireAdmin(caller);
    switch (gallery.get(id)) {
      case (null) { Runtime.trap("Gallery item not found") };
      case (?_) {
        let updated : GalleryItem = { id; title; imageUrl };
        gallery.add(id, updated);
      };
    };
  };

  public shared ({ caller }) func deleteGalleryItem(id : Nat) : async () {
    requireAdmin(caller);
    gallery.remove(id);
  };

  public query func getAllGalleryItems() : async [GalleryItem] {
    gallery.values().toArray();
  };

  public query func getGalleryItem(id : Nat) : async GalleryItem {
    switch (gallery.get(id)) {
      case (null) { Runtime.trap("Gallery item not found") };
      case (?item) { item };
    };
  };

  // Contact Messages
  type ContactMessage = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    date : Time.Time;
  };

  let messages = Map.empty<Nat, ContactMessage>();
  var nextMessageId = 1;

  public shared func submitContactMessage(name : Text, email : Text, phone : Text, message : Text) : async Nat {
    let contact : ContactMessage = {
      id = nextMessageId;
      name;
      email;
      phone;
      message;
      date = Time.now();
    };
    messages.add(nextMessageId, contact);
    let currentId = nextMessageId;
    nextMessageId += 1;
    currentId;
  };

  public shared ({ caller }) func getAllContactMessages() : async [ContactMessage] {
    requireAdmin(caller);
    messages.values().toArray();
  };

  public shared ({ caller }) func getContactMessage(id : Nat) : async ContactMessage {
    requireAdmin(caller);
    switch (messages.get(id)) {
      case (null) { Runtime.trap("Message not found") };
      case (?m) { m };
    };
  };

  // SEED DATA
  public shared ({ caller }) func seedData() : async () {
    if (nextEventId > 1) { Runtime.trap("Data has already been seeded!") };

    ignore await addEvent(
      "श्री हनुमान जयंती जन्मोत्सव",
      "Shri Hanuman Jayanti Janmotsav",
      1_743_532_200_000_000_000,
      "प्रातः 5:00 बजे मंगला आरती एवं रुद्राभिषेक | 11:00 बजे महाभिषेक | सायं 7:00 बजे भव्य भजन संध्या | रात्रि 10:00 बजे जागरण एवं प्रसाद वितरण",
      "बजरंग धाम मंदिर परिसर, मलांजखण्ड"
    );

    ignore await addEvent(
      "नवरात्रि महोत्सव",
      "Navratri Mahotsav",
      1_791_072_000_000_000_000,
      "नौ दिनों की कथा, जगराता एवं हवन का आयोजन। सभी भक्तजनों का स्वागत है।",
      "बजरंग धाम"
    );

    ignore await addAnnouncement(
      "मंदिर परिसर में जल सुविधा उपलब्ध",
      "सभी श्रद्धालुओं को सूचित किया जाता है कि अब मंदिर परिसर में शुद्ध पेयजल हेतु आरओ सिस्टम लगा दिया गया है।"
    );

    ignore await addAnnouncement(
      "पूजा यज्ञ हवन अभिषेक की सुविधा उपलब्ध",
      "बजरंग धाम में अब पूजा, यज्ञ, हवन एवं अभिषेक की विशेष सुविधा उपलब्ध है। अधिक जानकारी के लिए सम्पर्क करें।"
    );
  };
};
