---
slug: Fundamentals-and-surprising-discoveries-in-Swift
title: Fundamentals and surprising discoveries in Swift (Bonus at the end)
date: June 2020
excerpt: When going through really basic fundamentals concepts are simple, but
  like often happens, one ends up finding out little surprising details.
---
In my previous post, [My 100 Days of SwiftUI begin here](https://medium.com/@jonathangiardino/my-100-days-of-swiftui-begin-here-ed5b24b51c60)[,](<https://dev.to/jonathan_gardn/my-100-days-of-swiftui-begin-here-3mcf),***>) I explained the process that brought me to start this blog series and this is the first episode of the journey, all aboard!

# **Variables, simple data types, and string interpolation**

When going through really basic fundamentals concepts are simple, but like often happens, one ends up finding out little surprising details. That is exactly what happened.

For instance, I knew already about Multi-line strings, but what I did not know is that the start and end with three double quote marks must on their own line

```
var str = """
This goes
over multiple
lines
"""
```

Another example is that we can split big integers using underscores, for better readability. This came really out of nowhere! 😅

Am I the only one who finds this cool?

```
var billion = 1_000_000_000
```

# **Complex types**

Coming from a Javascript background it was easy enough for me to understand arrays, sets, and tuples, but I found out a new interesting feature that I did not know about.

When creating an empty collection we can use the pretty common syntax below:

```
//Empty Dictionary
var person = [String: String]()
//Empty Array
var age = [Int]()
```

But this is not possible when creating a Set instead, where we need to use angle brackets:

```
var random = Set<String>()
```

Fun fact, we can use angle brackets everywhere if we want, also in Dictionaries and Arrays, maybe this would look good and give consistency, don’t you think?

```
var person = Dictionary<String, String>()
var age = Array<Int>()
var random = Set<String>()
```

# *As promised a little **BONUS** that might be nothing, but it was so cool for me to find out!*

While going through the **\#100DaysOfSwiftUI**, I am doing another course on [Udemy](https://www.udemy.com/course/swiftui-masterclass-course-ios-development-with-swift/) taught by Robert Petras([@RobertPetras](http://twitter.com/RobertPetras)) for fun and to learn some little tricks to add on my new and first ios app.

At the and of a section, Robert explains how to create custom Stickers to send in Messages, and I was really excited about how easy it is.

All you need to do is to go to the root folder in Xcode, and in the general panel on the bottom-left click on the plus button inside the “Project” sidebar.

Here you can type sticker and select “Sticker Pack Extension”, click next and create the new Sticker folder.

And easy enough, inside that folder created:

\- Navigate to the .xcassets folder\
- Add the correct icon sizes that will show in the Messages app as an option to attach the stickers inside the App icon\
- Add the stickers images inside the Sticker Pack folder\
- Build your app and when opening the Messages app in the options to attach your new Sticker pack will appear!

I was more excited than when I first created a form in Javascript 😂

Any feedback, comment or advice is super appreciated, in fact, it is encouraged.

Let’s connect!\
Website: [jonathangiardino.com](https://jonathangiardino.com/)\
Twitter: [@jonathan_gardn](http://twitter.com/jonathan_gardn)