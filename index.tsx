export class OnAction implements IOnActionListener {
    private static _instance: OnAction = new OnAction();
    private onActionListener = new Object();
    private onActionHashMap = new Map();
  
    constructor() {
      if (OnAction._instance) {
        throw new Error(
          "Error: Instantiation failed: Use OnAction.getInstance() instead of new."
        );
      }
      OnAction._instance = this;
    }
  
    public static getInstance(): OnAction {
      return OnAction._instance;
    }
  
    onAction(it: any): void {
      console.log("OnAction");
    }
  
    public doAction(type: string, it: any) {
      (this.onActionHashMap.get(type) as IOnActionListener).onAction(it);
    }
  
    public addOnAction(
      onActionType: string,
      onActionWithListener: IOnActionListener
    ) {
      this.onActionListener = onActionWithListener;
      this.onActionHashMap.set(onActionType, this.onActionListener);
    }
  }
  
  interface IOnActionListener {
    onAction(it: any): void;
  }
  