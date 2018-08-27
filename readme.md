# TypewriterJS v2

A simple yet powerful native javascript plugin for a cool typewriter effect, developed by Tameem Safi.

I am still learning so any advice or feedback would be amazing. You can find my email on my profile page.

[Website](https://safi.me.uk/typewriterjs)

# Core

This include the core typewriter library, which can be used directly through the API.

See examples in the 'examples' folder.

```
new Typewriter('#typewriter', {
  strings: ['Hello', 'World'],
  autoStart: true,
});
```

# React

This incldues a React component which can be used within your project. You can pass in a onInit function which will be called with the instance of the typewriter so you can use the typewriter core API.

```
<Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Hello World!')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>
```

Alternatively you can also pass in options to use auto play and looping for example:

```
<Typewriter
  options={{
    strings: ['Hello', 'World'],
    autoStart: true,
    loop: true,
  }}
/>
```

# CDN JS

**This is only working for v1 at the moment, will update this file once v2 is on CDN**

You can use the CDN JS version of this plugin for fast and easy setup.

https://cdnjs.com/libraries/TypewriterJS

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/TypewriterJS/1.0.0/typewriter.min.js"></script>
```
