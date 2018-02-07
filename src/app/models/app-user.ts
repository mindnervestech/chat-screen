export interface AppUser {
        email?: string;
        password?: string;
        firstName?: string;
        lastName?: string;
        token?: any;
        uid?: string; 
        isLoggedIn?: boolean;
        profImage?:any;
        req_onboarding?:any[]; 
}

