import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Announcement {
    id: bigint;
    title: string;
    content: string;
    date: Time;
}
export interface ContactMessage {
    id: bigint;
    date: Time;
    name: string;
    email: string;
    message: string;
    phone: string;
}
export interface GalleryItem {
    id: bigint;
    title: string;
    imageUrl: string;
}
export type Time = bigint;
export interface Event {
    id: bigint;
    titleEnglish: string;
    titleHindi: string;
    date: Time;
    description: string;
    location: string;
}
export interface backendInterface {
    // Public
    getAllEvents(): Promise<Array<Event>>;
    getAllAnnouncements(): Promise<Array<Announcement>>;
    getAllGalleryItems(): Promise<Array<GalleryItem>>;
    getEvent(id: bigint): Promise<Event>;
    getAnnouncement(id: bigint): Promise<Announcement>;
    getGalleryItem(id: bigint): Promise<GalleryItem>;
    submitContactMessage(name: string, email: string, phone: string, message: string): Promise<bigint>;
    seedData(): Promise<void>;
    isAdmin(p: Principal): Promise<boolean>;
    // Admin only
    setAdmin(p: Principal): Promise<void>;
    addEvent(titleHindi: string, titleEnglish: string, date: Time, description: string, location: string): Promise<bigint>;
    updateEvent(id: bigint, titleHindi: string, titleEnglish: string, date: Time, description: string, location: string): Promise<void>;
    deleteEvent(id: bigint): Promise<void>;
    addAnnouncement(title: string, content: string): Promise<bigint>;
    updateAnnouncement(id: bigint, title: string, content: string): Promise<void>;
    deleteAnnouncement(id: bigint): Promise<void>;
    addGalleryItem(title: string, imageUrl: string): Promise<bigint>;
    updateGalleryItem(id: bigint, title: string, imageUrl: string): Promise<void>;
    deleteGalleryItem(id: bigint): Promise<void>;
    getAllContactMessages(): Promise<Array<ContactMessage>>;
    getContactMessage(id: bigint): Promise<ContactMessage>;
}
