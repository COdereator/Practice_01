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


## Lifecycle Hooks in Angular
- lifecycle hooks are special methods provided by Angular that allow us to tap into different stages of a component lifecycle. From the moment a component is created to the moment it is destroyed, Angular provides hooks that let us run login at specific times  

1. ngOnInit 
    - called once after the component is initialized
2. ngOnChanges 
    - called every time on input proprerty changes
3. ngDoCheck 
    - called during every change detection run
4. ngAfterContentInit
    - called once after component content has been initalized
5. ngAfterContentChecked
    - called after every check of the component content
6. ngAferViewInit
    - called once after the component views has been initialized 
7. ngAfterViewChecked
    - called after every check for the component's view
8. ngOnDestroy
    -  called just before the component is destroy  


*ngComponentOutlet 
    - it is use to load the component in view


## Angular Pipes 
- Simply pipes are a way to transform data directly in your templates. Think of them as little tools that take in some data do some processing on it, and then return a nicely formatted output right.


## Angular Services
- A Service in angular is a class that provides specific functionality across multiple components in your application. Services are designed to handle tasks like data fetchin, business login, logging or any operation that sould be shared across components.