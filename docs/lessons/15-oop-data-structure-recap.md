# 15 - Putting it all together I

<Teacher name="Michele"></Teacher>

## Goals

- Learn how we can use the data structures we've learned about in order to solve real problems
- Learn to use object oriented paradigms together with complex data structures
- *Get more confident transforming requirements into code*

## Tip - Reading user input from the command line

```java
    // declare a variable that will store the user input
    String userInput;

    //declare a scanner object to read the command line input by user
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter your choice:");
    
    // while the console is open, keep iterating
    while(scanner.hasNext()) {
        // get the input from the user and store it
        userInput = scanner.nextLine();

        System.out.println("Your choice was: " + userInput);

        // Prompt the use to make a new choice
        System.out.println("Enter your new choice:");
    }
```

## Lesson

Today's lesson is completely in the form of a long, interactive excercise. Here you find the outline of what we'll build. Afterwards, you can find a similar exercise to try later.

### 🍕 Pizza 3000 🍕

A new Pizza restaurant that's opening under the WeWork offices has asked us to prepare an **interactive system for managing their menus**. The users will receive a list of available pizzas, and upon entering the name of a pizza they'll receive all information: the name of each pizza, their ingredients and allergens, their price and a short description.

After speaking with the cooks, we have established that their pizzas have unique names, so we'll refer to the pizzas by name.

#### Start easy

To start easy, we can just put all Pizza information in a Map. In the main, we'll insert all Pizzas together with their info. The user will be able to query the map by pizza name.

#### Let's give it a structure

All information is now thrown into a String. This doesn't work very well, for instance if we want to structure this information nicely. Maybe we even want this information differently to waiters and waitresses, and to customers!
To give shape to the menu, we should create a `Pizza` object with all the properties listed above. What types should the properties have?

#### The menu revamp
Keeping logic inside the main method is a problem, because soon there will be a big spaghetti monster waiting for anybody trying to change things there. The solution is to move all the logic from there to a dedicated spot.

#### Doing it better
Can we make it better?

- Are the types of each `Pizza` property really the right ones?
- How can we avoid ingredients being mistyped? Tomatoe, Tomato, Tometo? Look at [enums](https://docs.oracle.com/javase/tutorial/java/javaOO/enum.html) if you'd like to have fun!
- Can you have the `Menu` class return the average price of the `Pizzas` it stores?


## Exercise

### 🖼 MoMa 2019 🖼
MoMa, the Museum of Modern Art in New York, is reponening this fall with a renewed exhibition. They'd like to have a system that allows visitors to type the number of an art piece (a little bit like an audioguide!) and return some relevant information. More precisely, this information should be returned:

- the name of the piece
- the type of art piece: whether a painting, a sculpture, a performance or something else.
- the year of creation
- the name of the artist(s)
- a small description

When the program starts, the user should be greeted with 5 art pieces (only listed by name and year). By selecting one, all information should be returned.

```
> Welcome to MoMa! Please select one of the pieces below:
1. Guernica (1937)
2. The Starry Night (1889)
3. Untitled (2018)
4. Fiery Sunset (1973)
5. The Kiss (1907)


> 1
Title: Guernica
Type: Painting
Artist: Pablo Picasso
Year: 1937
Description: This should be filled by somebody that knows about art!
```

Obviously, keep in mind everything we've discussed today while doing the exercise!