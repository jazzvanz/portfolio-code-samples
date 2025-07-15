export interface Testimonial {
    name: string;
    handle: string;
    blurb: string;
    userImage: {
        file: string;
        alt: string;
    };
};

export type Devices = { [key: string]: string };