import { Observable } from '@nativescript/core';

export class LearnViewModel extends Observable {
    private _dailyTips: Array<any>;

    constructor() {
        super();
        this._dailyTips = [
            {
                title: "Business Idioms",
                description: "Learn common expressions used in professional settings"
            },
            {
                title: "Pronunciation Guide",
                description: "Master the 'th' sound in English"
            },
            {
                title: "Grammar Tips",
                description: "Understanding present perfect tense"
            }
        ];
    }

    get dailyTips(): Array<any> {
        return this._dailyTips;
    }

    startLesson() {
        // Navigate to lesson detail page
        console.log("Starting lesson...");
    }
}