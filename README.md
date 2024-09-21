## Style Binding

if only we have to change the single porperty then we will use style binding 
otherwise we will use class binding
1. String Interpolation - {{ title }}
2. Property Binding - [src]
3. Class Binding - [class.text-red]
4. Style Binding - [style.backgroundColor]

## Two way data binding 
1. Two way data binding - [(ngModel)]


## Angular Directives
1. Add Additional Behaviour to elements 
2. Manipulate the DOM
3. Make application more dynamic and user friendly

### There are four types of directives 
1. Component Directives
    - These are the most commonly used directives. A component directive is essentially a cstom element with its own view and behaviour. Every Angular component is a directive with a templates.
2. Structural Directives
    - These directives alter the layout of the DOM by adding or removing elements. Common example include ngIf, ngFor , ngSwitch.
    - New Version : @If, @For, @Switch
3. Attribute Directive
    - These directives change the appearance of an element component, or another directive. Common examples include ngClass and ngStyle.
4. Custom Directives
    - which can create our own Directives from scratch.

## ng-template
- ng-template is a powerful tool in angular that allows us to define template content that can be used later in out application. Unlike regular HTML elements, ng-template itself will not redered inside the DOM, we can use it when we need  

## ngTemplateOutlet
- 
