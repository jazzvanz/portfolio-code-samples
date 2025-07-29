export interface Testimonial {
    name: string;
    handle: string;
    blurb: string;
    userImage: {
        file: string;
        alt: string;
    };
};

export interface Blog {
    title: string;
    tags: string[],
    byline: string,
    blogImage: {
        file: string,
        alt: string,
    }
} 

export type Devices = { [key: string]: string };