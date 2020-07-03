---
slug: 3-things-i-learned-about-swift-in-the-last-week
title: 3 things I’ve learned about Swift in the last week.
date: June 2020
excerpt: In this article, I won’t go over the fundamentals of Swift but I would
  like to highlight 3 things that I did not know and that I could not relate as
  a programmer, coming from Javascript.
---
ere I am with another episode of My 100 Days of SwiftUI journey.

In the last few days, I went through some fundamentals of the Swift language like functions, closures, and structs, and as a Frontend developer used to write Javascript I’ve found lots of commonalities, however when switching to another language some things are named or used differently.

Additionally, Javascript (unless using Typescript) is not a strongly typed language which makes it different from Swift or other programming languages.

In this article, I won’t go over the fundamentals of Swift but I would like to highlight 3 things that I did not know and that I could not relate as a programmer, coming from Javascript.

# 1. Inout parameters

All the parameters that are passed into Swift function cannot be changed as they are constants, so we basically return a new value every time we call that function with a new argument in the parameter.

Thanks to the ***inout*** parameters we can change the value directly inside the function instead of returning a new one, and that will reflect the original value outside that function.

For instance, let’s say we want to raise a number to the tenth power:

```
func decuplicate(number: inout Int) {
    number *= 10
}
```

In this case we are not just making operation to multiply but we are multiplying and assigning the new value to `number`.

To use this function we need to create a variable to store the Int we are going to use in it and when we call that function we are going to use an ampersand before the variable name.

```
var newNum = 2 
decuplicate(number: &newNum)
```

I was a bit confused to be honest but this short explanation on [HackingWithSwift](https://dev.to/jonathan_gardn/%5Bhttps://www.hackingwithswift.com/quick-start/understanding-swift/when-should-you-use-inout-parameters%5D(https://www.hackingwithswift.com/quick-start/understanding-swift/when-should-you-use-inout-parameters)) helped me.

# 2. Capturing values in closures

When you return a closure in a function, that closure can access or “capture” the values present in that function and keep track of them even when they no longer exist.

In this example the function `eat()` returns a closure, that accordingly accepts a string as a parameter and returns void (so basically return nothing, it just prints to the console):

```
func eat() -> (String) -> Void {
    return {
        print("I'm going to eat some \($0)")
    }
}
```

Then we can call that function and simply use the closure inside it.

```
let meal = eat()
meal("Fruit")
//prints "I'm going to eat some Fruit"
```

If we create a value inside the function `eat()` , for example to keep track of how many times we eat. Our closure will capture that value which will remain active within the closure each time we call the function.

```
func eat() -> (String) -> Void {
    var mealCounter = 1
    return {
        print("Meals for today: \(mealCounter). I'm going to eat some \($0)")
        mealCounter += 1
    }
}
```

And when we call the function our `mealCounter` will increase each time `eat()` is called.

```
meal("Beans and Eggs")
meal("Tofu")
meal("Salad")
meal("Pizza")
//mealCounter will increase to 5 in this case
```

# 3. Struct and Property observers

When we create an instance of a struct, sometimes we want something to happen each time a property changes.

Let’s say we have created a struct that tracks how much distance we have done with our running or cycling:

```
struct Distance {
    var action: String
    var miles: Int
}
```

Then we create an instance for our session:

```
var session = Distance(action: "Running", miles: 0)
session.miles = 2
session.miles = 7
session.miles = 12
```

Wouldn’t be cool if each time we call the `miles` property and update it we also notify the user about the distance?

Well, we can do that with Property observers lie `didSet()`

```
struct Distance {
    var action: String
    var miles: Int {
        didSet {
            print("You have been \(action) for \(miles)miles")
        }
    }
}
```

Any feedback, comment or advice is super appreciated, in fact, it is encouraged.

Let’s connect!

Twitter: [@jonathan_gardn](https://twitter.com/jonathan_gardn)