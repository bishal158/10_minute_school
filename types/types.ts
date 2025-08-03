export interface Media {
    name: string;
    resource_type: string;
    resource_value: string;
    thumbnail_url?: string;
}

export interface ChecklistItem {
    id: string;
    text: string;
    icon?: string;
    color?: string;
    list_page_visibility?: boolean;
}

export interface SEO {
    title: string;
    description: string;
    keywords: string;
}

export interface CtaText {
    name: string;
    value: string;
}

export interface SectionValue {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

export interface Section {
    type: string;
    name: string;
    description: string;
    bg_color?: string;
    order_idx: number;
    values: SectionValue[];
}

export interface ProductData {
    slug: string;
    id: number;
    title: string;
    description: string;
    media: Media[];
    checklist: ChecklistItem[];
    seo: SEO[];
    cta_text: CtaText;
    sections: Section[];
}

export interface ApiResponse {
    code: number;
    data: ProductData;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error: any[];
    message: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload: any[];
    status_code: number;
}

export type LangType = "en" | "bn";
