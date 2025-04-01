# OnAction-TypeScript

OnAction is a lightweight TypeScript implementation of the Observer Pattern. Just want to get your API calls data to the UI the easiest way possible, OnAction is for you.

## Installation

```
yarn add 'on-action'
```

To add a listener simply add:

```
let ONE_ACTION = "ONE_ACTION";

var action: IOnActionListener = {
    onAction: (it: any) => {
        console.log(it);
    },
};

OnAction.getInstance().addOnAction(ONE_ACTION, action);
```

To send the custom event with passing data to it:

```
OnAction.getInstance().doAction(ONE_ACTION, "NEW TEXT");
```
