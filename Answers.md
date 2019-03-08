1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? 
    Which method do we use to create a new object while extending the 
    properties of another object?

    The .map() function, the .filter() function, and the .reduce()
    function are all JavaScript array/object methods that do NOT 
    produce side-effects because they don't modify the original 
    values passed into them. Instead, they return a modified copy
    of the original value. We use the .map() function in Redux to
    create a new object while extending the properties of another
    object.


2.  Describe `actions`, `reducers` and the `store` and their role in Redux. 
    What does each piece do? Why is the store known as a 'single source of 
    truth' in a redux application?

    “Redux” was created by Dan Abramov to simplify the process of managing 
    multiple “states” in a JavaScript application, as well as improving upon 
    the predictability of this state management. How does he end up doing 
    this? Well, Dan created “the Store,” which, unlike Flux (Flux allows for 
    more than one store), is the ONLY place in Redux where the state of an 
    app is stored inside of a single object. This object is directly 
    ‘immutable,’ which means that it literally can’t be changed. Abramov 
    designed it so that each time you wanted to update the state of your 
    app (inside the store), instead of having to make changes to the store 
    object, itself, your app would recruit the “reducers” to make a copy of 
    that object and then modify that copy in some way, and then return that 
    copy to the store so that it can replace the current state object with 
    that modified copy. These “reducers” are basically ‘pure functions’ that 
    take two arguments, the current state of the app and an action (built by 
    the action creator), and then return a single value of the new state (to 
    be passed to the store). The “action” that is passed into the reducers 
    (along with the current state) is essentially a simple JavaScript object 
    that is required to have a “type” property, which is equal to a string 
    value. An action may also include a “payload” property, but it isn’t 
    required. This action is then given to the store to let it know that some 
    sort of user interaction or internal change has occurred and that the 
    store needs to update its state according to these recent changes. The 
    store then takes that action and gives it to the reducers to copy, modify, 
    and return it back to the store, where it can then replace the existing 
    state with this new one. This ONE store in a Redux app controls the ENTIRE 
    state of the app and is the reason that it is known as a “single source of 
    truth”.


3.  What is the difference between Application state and Component state? 
    When would be a good time to use one over the other?

    First, let’s breakdown ‘component state’ in the context of Redux. Abramov 
    described Redux as having TWO kinds of components: “smart components” and 
    “dumb components”. He considered ‘smart components’ to be those 
    components that hold their own state and also manipulate it. A great 
    example of this would be a <PokemonList /> component, whose job is to get 
    a list of pokemon and then iterate through that list to render a 
    <Pokemon /> component for each item in the list. On the other hand, since 
    the <Pokemon /> component is only receiving data in the form of props, it 
    would be considered a ‘dumb component’ (or a ‘presentational component’) 
    because it is only focused on displaying that received data. Now, let’s 
    discuss the idea of ‘application state’, which refers to the state that is 
    housed in the Redux Store. The state that is housed inside of the Store 
    should be reserved only for state that is to be shared by multiple 
    components or pages in your app. Using our pokemon analogy, if we wanted 
    to keep track of all the pokemon that we have already caught (Gotta catch 
    ‘em all!), we could introduce a “Caught ‘em” <button> on each pokemon’s 
    individually-rendered page. Then, whenever we clicked that button, that 
    pokemon would be added to an ever-growing list for our own tracking 
    purposes. Well, we would want to store this information inside of the 
    Redux store (as ‘application state’) because it is data that needs to be 
    tracked across MULTIPLE pokemon components and pages in our app. So, 
    essentially ANY component that is connected to the Redux store is 
    considered a ‘container’ component because it can update the Store via 
    reducers, while the presentational components (smart or dumb components) 
    are those components that hold their own state or are passed data in the 
    form of props.


4.  What is middleware?

    Let’s use a night club analogy, since my project manager, Jake, really 
    enjoys going out to dance! The usual process of Jake getting into a night 
    club might look like this: (1) Jake waits in line, outside of the night 
    club, to get in, (2) Jake moves slowly toward the entrance, which is 
    guarded by a ‘bouncer’ or security guard, (3) when Jake reaches the 
    entrance, a bouncer will inspect him (and his ID) and then make one of 
    two decisions: (a) let him into the club or (b) deny him access. If we 
    think of a reducer as a “night club” and Jake as the “action” that’s 
    trying to get into the “REDUCERS Night Club” (a popular place because 
    drink prices are often ‘reduced’ - haha), then we can think of the 
    middleware as that “bouncer”! Basically, the job of a middleware is to 
    intercept actions before they reach the reducers.


5.  Describe `redux-thunk`, what does it allow us to do? How does it change 
    our `action-creators`?

    A ‘thunk’ is just a function that is returned by another function, while 
    ‘Redux-thunk’ is a middleware that was created by Dan Abramov to allow 
    Redux to do asynchronous things inside of what is normally a synchronous 
    process. So, just as all middleware does, when an ‘action creator’ is 
    called, redux-thunk will intercept that action creator to see what is 
    returned from it. If we continue to use the night club analogy from above, 
    when an action is returned by the action creator (AKA Jake’s ID passes 
    inspection), redux-thunk sends the action to the reducer (AKA the bouncer 
    lets Jake into the night club). However, if a THUNK (a function returned 
    by another function) is returned INSTEAD of an action (which is just an 
    object) when redux-thunk intercepts that action creator, redux-thunk will 
    invoke that function and pass in the dispatch function as an argument to 
    it (AKA the bouncer finds out that Jake is ACTUALLY related to Justin 
    Timberlake, who will be playing at REDUCERS that night, so, in hopes of 
    a possible raise, the bouncer calls management to tell them to prepare 
    a VIP table with the finest bottle of Ciroc for Jake before granting 
    him access to the night club so he can enjoy the VIP table and drinks in
    addition to the dancing).


6.  Which `react-redux` method links up our `components` with our `redux 
    store`?

    The connect() function links up our React component with our Redux Store.

