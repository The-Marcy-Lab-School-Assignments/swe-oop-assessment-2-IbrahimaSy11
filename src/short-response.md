# Section 2 — Short Response

Write your responses directly in this file. Follow markdown formatting guidelines. Check the rubric.md file to see how your short responses will be graded.

As a quick guide, check the following before submitting:

- [] Answered all parts of every question
- [] No typos or grammar mistakes (use grammarly!)
- [] Accurately uses relevant technical terminology
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Responses are concise and easy to comprehend

---

## Question 1

In your own words, explain what does _encapsulation_ refer to? Why is this concept beneficial when programming?

Provide a code snippet to illustrate _encapsulation_.

## Response 2

Encapsulation refers to the idea of bundling related data and functions that use that data into one unit. It keeps everything organized and prevents certain values from being accessed or changed directly from the outside. This makes programs easier to understand, safer, and less likely to break, while preventing unwanted behavior from happening.

### Example of Encapsulation in Code

```js
class Counter {
  constructor() {
    this.count = 0; // data stored inside the object
  }

  increment() {
    this.count++; // behavior that works with the data
  }
}
```

---

## Question 2

Explain what the `this` keyword is. Why is the `this` keyword useful?

In the code snippet below, what does `this` refer to?

```js
class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
  }
}

const counterA = new Counter();
const counterB = new Counter();

counterA.increment();
counterA.increment();
counterA.increment();

counterB.increment();

console.log(counterA.count);
console.log(counterB.count);
```

## Response 2

The `this` keyword mean to basically points to the object that’s currently running the method. It lets you work with the data inside that specific object instead of something random.

In the code snippet, `this` is referring to the `count` property inside each `Counter` object. So when you call `increment()`, `this.count++` is only updating the count for that one instance. That’s why `counterA` and `counterB` end up with different numbers. The way I look at it, `this` is kinda like a way to access the variables inside the class for that exact object you're dealing with.

## Question 3

In your own words, explain what **polymorphism** means in OOP. Provide an example in code that demonstrates polymorphism.

## Response 3

Polymorphism means inheriting a method from a parent class, but in the subclass you overwrite that method with your own version. So you’re using the same method name, but each class can make it work in its own way.

### Example of Polymorphism

```js
class Animal {
  // Parent method
  speak() {
    console.log("This animal makes a sound.");
  }
}

class Dog extends Animal {
  // Same method name as parent, but rewritten in the subclass
  speak() {
    console.log("The dog barks.");
  }
}

class Cat extends Animal {
  // Same method name again, different behavior
  speak() {
    console.log("The cat meows.");
  }
}
```

---

## Question 4

You're building a game where players can raise different digital pets: Cats, Dogs, and Birds. All pets have have a `name`, `energy` level, and `happiness` level and can all `sleep`. Cats have the ability to `hunt`, dogs have the ability to `chase`, and birds have the ability to `fly`.

**Part A:** Describe in words how you would use inheritance to organize these classes.

**Part B:** Explain one advantage of using inheritance here instead of creating three completely separate classes.

## Response 4

**Part A:**
Since all the animals in the question share the same traits (name, energy, happiness, and the ability to sleep), I would use inheritance by creating one main class called something like `MyPets` or `Pet`. That parent class would hold all the shared data and methods. Then I would make subclasses like `Cat`, `Dog`, and `Bird` that extend the parent class and add their own special abilities like `hunt`, `chase`, or `fly`.

**Part B:**
One advantage of using inheritance is that I don’t have to rewrite the same code three times. All the shared stuff lives in the parent class, and each pet only adds what makes it unique. This keeps the code cleaner, easier to manage, and way less repetitive.
