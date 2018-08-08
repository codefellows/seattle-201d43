# Class 8: HTML Forms and JS Events

<a id="top"></a>
## Lecture 8

## Today's Schedule
- Announcements
- Code Review *[30 minutes]*
- [Go over the assigned readings](#readings) *[60 minutes]*
- Code demo *[90 minutes]*

**Learning Objectives**

As a result of completing Lecture 8 of Code 201, students will:
- Be able to add an input form to an HTML document with properly structured HTML including the necessary `<form>`, `<input>`, and `<label>` tags, as well as the useful but not necessary `<fieldset>` tag, as measured by successful completion of the daily code assignment and a quiz administered in Canvas.
- Demonstrate how to use JavaScript events with the .addEventListener() method on a DOM element (specifically, an HTML form), using either a named or anonymous event handler function, as measured by successful completion of the daily code assignment.
- Be able to add a new row to their data table(s) by storing, computing, and rendering data from the HTML form, as measured by successful completion of the daily code assignment.
- Be able to successfully pair program with a fellow student and manage the collaborative and version control aspects of working with Git (from the command line) and GitHub (in the browser), as measured by successful completion of the daily code assignment.

<a id="readings"></a>

## Readings

**HTML Chapter 7: "Forms"**

- p.148: Form controls
- pp.149-50: How forms work
- pp.151-62 : Form structure, overview of all input types
- p.163: Labelling form controls
- p.164: \<fieldset\> and grouping form elements
- pp.165-68 : HTML5 form features (validation, dates, email, URL search)

**HTML Chapter 14: "Lists, Table & Forms" (CSS)**

- p.333-36: Bullet point styles/positioning for lists
- p.337-40: Table properties (VERY useful reference)
- p.341-44: Styling [forms, inputs, buttons, fieldsets, legends]
- p.345: Aligning form controls

**JS Chapter 6: "Events"**

- pp.246-47: Different event types (big list!)
- p.248: How events trigger JavaScript code
- pp.250-53: Three ways to bind an event to an element
- p.254: Event listeners
- p.260: Event flow
- p.264: Using event listeners with the event object
- p.268: Using event delegation
- p.270: Which element did an event occur on?
- p.271: Different types of events
- p.272: User interface events
- p.280: Keyboard events
- p.282: Form events
- p.286: HTML5 events

[-top-](#top)


## Forms

To learn about inputs, each person will be responsible for learning about & providing a code snippet for one particular input type. You'll get 5 minutes to research your input type and come up with a working HTML snippet that demonstrates what that input is useful for. (If you have extra time, try adding in some interesting attributes.) Then we'll go through them all, and you'll have 30 seconds to explain to your classmates why you would choose to use that particular input in a form.

As an example, for the `text` input, someone might send a Slack message with the code snippet:

```html
<input type="text" maxlength="8" />
```

And their explanation might be:

>The text input type is useful for when you want the user to be able to type things into a box. It shows this box, which is one line, and lets the user type things in. I also put in this `maxlength` attribute, which cuts the user off after they type in that many characters.


The input types we'll look at are:

1. `button`
1. `checkbox`
1. `color`
1. `date`
1. `email`
1. `file`
1. `hidden`
1. `month`
1. `number`
1. `radio`
1. `range`
1. `reset`
1. `search`
1. `submit`
1. `tel`
1. `time`
1. `option` and `select`
1. `textarea`
