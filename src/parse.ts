import * as vscode from 'vscode';
const esprima = require('esprima');
const activeEditor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;
const content: string | undefined = activeEditor ? activeEditor?.document.getText() : '';
export function parse() {
    if (!content) {
        return;
    }
    const componentInfo = esprima.parse(content);
    // const displayName: string = componentInfo.displayName,
    //     methodsList: Object[] = componentInfo.methods;
    console.log(componentInfo);
}