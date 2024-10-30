import { Observable } from '@nativescript/core';

export class QuizViewModel extends Observable {
    private _quizTypes: Array<any>;

    constructor() {
        super();
        this._quizTypes = [
            {
                icon: "&#xf02d;",
                name: "Vocabulary",
                description: "Test your word knowledge"
            },
            {
                icon: "&#xf075;",
                name: "Grammar",
                description: "Practice sentence structure"
            },
            {
                icon: "&#xf518;",
                name: "Listening",
                description: "Improve comprehension"
            },
            {
                icon: "&#xf02e;",
                name: "Reading",
                description: "Enhance understanding"
            }
        ];
    }

    get quizTypes(): Array<any> {
        return this._quizTypes;
    }

    startQuiz(args: any) {
        const quizType = args.object.bindingContext;
        console.log(`Starting ${quizType.name} quiz...`);
    }
}