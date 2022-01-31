"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnAction = void 0;
class OnAction {
    constructor() {
        this.onActionListener = new Object();
        this.onActionHashMap = new Map();
        if (OnAction._instance) {
            throw new Error("Error: Instantiation failed: Use OnAction.getInstance() instead of new.");
        }
        OnAction._instance = this;
    }
    static getInstance() {
        return OnAction._instance;
    }
    onAction(it) {
        console.log("OnAction");
    }
    doAction(type, it) {
        this.onActionHashMap.get(type).onAction(it);
    }
    addOnAction(onActionType, onActionWithListener) {
        this.onActionListener = onActionWithListener;
        this.onActionHashMap.set(onActionType, this.onActionListener);
    }
}
exports.OnAction = OnAction;
OnAction._instance = new OnAction();
