export const coreJava2 = [
    {
    question: "What are static synchronization methods?",
    options: [
      "Methods that don’t need objects",
      "Synchronized methods that lock on the class object",
      "Methods that run without threads",
      "Methods that cannot throw exceptions"
    ],
    answer: "Synchronized methods that lock on the class object"
  },
  {
    question: "Can two threads simultaneously execute two static synchronized methods of SAME class?",
    options: ["Yes", "No", "Only if methods are private", "Only if threads have same priority"],
    answer: "No"
  },
  {
    question: "Can non-static synchronized methods and static synchronized methods run at the same time?",
    options: ["Yes", "No", "Only if object is null", "Only when JVM allows"],
    answer: "Yes"
  },
  {
    question: "Why is thread communication needed in Java?",
    options: [
      "To stop threads",
      "To allow threads to share information and work together",
      "To increase CPU speed",
      "To avoid garbage collection"
    ],
    answer: "To allow threads to share information and work together"
  },
  {
    question: "What are the methods used for thread communication?",
    options: ["start(), stop(), sleep()", "wait(), notify(), notifyAll()", "run(), yield(), join()", "open(), close(), lock()"],
    answer: "wait(), notify(), notifyAll()"
  },
  {
    question: "What is the wait() method?",
    options: [
      "A method to stop JVM",
      "A method that releases lock and makes thread wait",
      "A method to pause program forever",
      "A method to reduce thread priority"
    ],
    answer: "A method that releases lock and makes thread wait"
  },
  {
    question: "What is the notify() method?",
    options: [
      "A method to send signals to OS",
      "A method that wakes up one waiting thread",
      "A method to lock a thread",
      "A method to stop all threads"
    ],
    answer: "A method that wakes up one waiting thread"
  },
  {
    question: "What is the notifyAll() method?",
    options: [
      "A method to close all threads",
      "A method that wakes up all waiting threads",
      "A method to lock all objects",
      "A method to reset thread priority"
    ],
    answer: "A method that wakes up all waiting threads"
  },
  {
    question: "Why wait(), notify(), notifyAll() must be inside synchronized block?",
    options: [
      "Because Java syntax requires it",
      "Because these methods require the thread to hold the lock",
      "Because they only work with static methods",
      "Because they modify memory directly"
    ],
    answer: "Because these methods require the thread to hold the lock"
  },
  {
    question: "Why can't we use Thread methods for thread communication?",
    options: [
      "Because Thread has no communication methods",
      "Because those methods do not release lock",
      "Because JVM does not allow it",
      "Because thread methods are private"
    ],
    answer: "Because those methods do not release lock"
  },
  {
    question: "What is a Monitor in Java?",
    options: [
      "A device to display output",
      "A synchronization mechanism that controls thread access",
      "A garbage collector component",
      "A type of thread"
    ],
    answer: "A synchronization mechanism that controls thread access"
  },
  {
    question: "What is Inter-thread communication?",
    options: [
      "Communication between two different JVMs",
      "Communication technique between threads using wait/notify",
      "Communication between two OS processes",
      "Communication between objects only"
    ],
    answer: "Communication technique between threads using wait/notify"
  },
  {
    question: "What is Deadlock in Java?",
    options: [
      "A state when memory gets full",
      "A situation where two threads wait forever for each other's lock",
      "A thread that runs very slow",
      "An exception thrown by JVM"
    ],
    answer: "A situation where two threads wait forever for each other's lock"
  },
  {
    question: "Which method is used to prevent deadlock?",
    options: [
      "wait()",
      "notify()",
      "Using proper lock ordering",
      "stop()"
    ],
    answer: "Using proper lock ordering"
  },
  {
    question: "What is Starvation?",
    options: [
      "Thread gets too much CPU time",
      "Thread never gets CPU time or resources",
      "Thread enters infinite loop",
      "Thread waits for notify forever"
    ],
    answer: "Thread never gets CPU time or resources"
  },
  {
    question: "What is Livelock?",
    options: [
      "Threads keep changing their state and cannot proceed",
      "Thread locked forever",
      "Thread that never stops",
      "Thread that stops immediately"
    ],
    answer: "Threads keep changing their state and cannot proceed"
  },
  {
    question: "What is the join() method used for?",
    options: [
      "To combine two threads into one",
      "To pause the current thread until another thread completes",
      "To start a new thread",
      "To terminate a thread"
    ],
    answer: "To pause the current thread until another thread completes"
  },
  {
    question: "Which thread method causes the current thread to temporarily pause?",
    options: ["yield()", "exit()", "notify()", "start()"],
    answer: "yield()"
  },
  {
    question: "What does the interrupted() method do?",
    options: [
      "Stops a thread immediately",
      "Checks whether the thread has been interrupted",
      "Refreshes the thread",
      "Sets thread priority"
    ],
    answer: "Checks whether the thread has been interrupted"
  },
  {
    question: "Which keyword is used to prevent a method from being accessed by multiple threads simultaneously?",
    options: ["volatile", "sync", "synchronized", "static"],
    answer: "synchronized"
  },
  {
    question: "When is IllegalMonitorStateException thrown?",
    options: [
      "When a thread is interrupted",
      "When wait/notify is called without owning the lock",
      "When thread sleeps too long",
      "When thread priority is low"
    ],
    answer: "When wait/notify is called without owning the lock"
  },
  {
    question: "Which method releases the lock in Java?",
    options: [
      "sleep()",
      "yield()",
      "wait()",
      "join()"
    ],
    answer: "wait()"
  },
  {
    question: "Do notify() and notifyAll() release the lock immediately?",
    options: [
      "Yes, immediately",
      "No, they release after exiting synchronized block",
      "Only notifyAll() releases immediately",
      "They never release the lock"
    ],
    answer: "No, they release after exiting synchronized block"
  },
  {
    question: "What are Thread Groups in Java?",
    options: [
      "A collection of threads",
      "A class to group threads into a single unit for management",
      "A synchronization class",
      "A memory group for threads"
    ],
    answer: "A class to group threads into a single unit for management"
  },
  {
    question: "What are Thread Local variables?",
    options: [
      "Variables shared among threads",
      "Variables that are local to a block",
      "Variables that maintain separate value for each thread",
      "Static variables"
    ],
    answer: "Variables that maintain separate value for each thread"
  },
  {
    question: "What are Daemon Threads?",
    options: [
      "User-level threads",
      "Threads created by JVM only",
      "Background service threads that run for JVM",
      "Threads with highest priority"
    ],
    answer: "Background service threads that run for JVM"
  },
  {
    question: "How to make a non-daemon thread a daemon thread?",
    options: [
      "Using setDaemon(true) before start()",
      "Using setDaemon(true) after start()",
      "Using daemon() keyword",
      "Using thread.stop()"
    ],
    answer: "Using setDaemon(true) before start()"
  },
  {
    question: "Can the main() thread be made daemon?",
    options: [
      "Yes",
      "No",
      "Only in JDK 11+",
      "Only if run inside another thread"
    ],
    answer: "No"
  },
  {
    question: "What are Nested Classes in Java?",
    options: [
      "Classes inside an interface",
      "Classes declared inside another class",
      "Classes with inheritance",
      "Classes inside a package"
    ],
    answer: "Classes declared inside another class"
  },
  {
    question: "What are Inner Classes in Java?",
    options: [
      "Static nested classes",
      "Non-static nested classes",
      "Classes inside main method",
      "Classes inside abstract classes"
    ],
    answer: "Non-static nested classes"
  },
  {
    question: "What is the purpose of nested classes in Java?",
    options: [
      "To improve performance only",
      "To group classes logically and increase encapsulation",
      "To make code longer",
      "To allow multiple inheritance"
    ],
    answer: "To group classes logically and increase encapsulation"
  },
  {
    question: "What are Static Nested Classes?",
    options: [
      "Classes inside interfaces",
      "A static class inside another class",
      "A class declared inside a method",
      "A final inner class"
    ],
    answer: "A static class inside another class"
  },
  {
    question: "How to instantiate a static nested class?",
    options: [
      "Using new OuterClass().new InnerClass()",
      "Using new OuterClass.InnerClass()",
      "Using OuterClass.createInner()",
      "Using static keyword"
    ],
    answer: "Using new OuterClass.InnerClass()"
  },
  {
    question: "What are Local Inner Classes?",
    options: [
      "Classes inside a loop",
      "Classes declared inside a method",
      "Classes declared inside a constructor only",
      "Static classes inside methods"
    ],
    answer: "Classes declared inside a method"
  },
  {
    question: "Which of the following is a feature of Local Inner Classes?",
    options: [
      "They can be static",
      "They cannot access final or effectively final variables",
      "They are visible only within the method where defined",
      "They can be accessed from anywhere"
    ],
    answer: "They are visible only within the method where defined"
  },
  {
    question: "What are Anonymous Inner Classes?",
    options: [
      "Classes with no objects",
      "Classes with no name declared and instantiated at the same time",
      "Classes inside interfaces",
      "Classes with only static members"
    ],
    answer: "Classes with no name declared and instantiated at the same time"
  },
  {
    question: "Which is a restriction for Anonymous Inner Classes?",
    options: [
      "They can extend multiple classes",
      "They can have constructors",
      "They cannot have explicit constructors",
      "They can be static"
    ],
    answer: "They cannot have explicit constructors"
  },
  {
    question: "Can we instantiate an interface directly in Java?",
    options: [
      "Yes, using new Interface()",
      "No, we must implement it in another class",
      "Yes, only in Java 17+",
      "Yes, using new keyword inside constructor"
    ],
    answer: "No, we must implement it in another class"
  },
  {
    question: "What are Member Inner Classes?",
    options: [
      "Classes declared inside methods",
      "Non-static classes declared inside another class",
      "Classes inside interfaces",
      "Static classes inside packages"
    ],
    answer: "Non-static classes declared inside another class"
  },
  {
    question: "How to instantiate a Member Inner Class?",
    options: [
      "Using new Outer.Inner()",
      "Using Outer.inner()",
      "Using OuterClass.Inner inner = outer.new Inner();",
      "Using InnerClass() directly"
    ],
    answer: "Using OuterClass.Inner inner = outer.new Inner();"
  },
  {
    question: "How do we achieve encapsulation in Java?",
    options: [
      "By using only static methods",
      "By making variables public and methods private",
      "By making variables private and providing public getters/setters",
      "By using abstract classes only"
    ],
    answer: "By making variables private and providing public getters/setters"
  },
  {
    question: "What are reference variables in Java?",
    options: [
      "Variables that store object memory location/address",
      "Variables that store primitive values only",
      "Variables used only for arrays",
      "Variables that cannot be reassigned"
    ],
    answer: "Variables that store object memory location/address"
  },
  {
    question: "Will the compiler create a default constructor if a parameterized constructor exists?",
    options: [
      "Yes",
      "No",
      "Only if class is abstract",
      "Only if class has static variables"
    ],
    answer: "No"
  },
  {
    question: "Can we have a method with the same name as the class in Java?",
    options: [
      "Yes, but it becomes a constructor",
      "No, it's allowed only in C++",
      "Yes, it becomes a normal method",
      "Only if marked static"
    ],
    answer: "Yes, it becomes a normal method"
  },
  {
    question: "Can we override constructors in Java?",
    options: [
      "Yes",
      "No",
      "Only static constructors",
      "Only default constructors"
    ],
    answer: "No"
  },
  {
    question: "Can static methods access instance variables?",
    options: [
      "Yes, always",
      "Only if using 'this' keyword",
      "Only after object creation through an object reference",
      "No, static methods cannot access instance members directly"
    ],
    answer: "No, static methods cannot access instance members directly"
  },
  {
    question: "How do we access static members in Java?",
    options: [
      "Using this keyword",
      "Using object reference only",
      "Using ClassName.member",
      "Using super keyword"
    ],
    answer: "Using ClassName.member"
  },
  {
    question: "Can we override static methods in Java?",
    options: [
      "Yes",
      "No, static methods are hidden not overridden",
      "Only in interfaces",
      "Only if they return void"
    ],
    answer: "No, static methods are hidden not overridden"
  },
  {
    question: "What is the difference between object and reference?",
    options: [
      "Object contains data, reference stores address of object",
      "Reference contains data, object stores address",
      "Both contain data",
      "Both store only methods"
    ],
    answer: "Object contains data, reference stores address of object"
  },
  {
    question: "Which gets garbage collected in Java?",
    options: [
      "Only references",
      "Only objects",
      "Objects with no references",
      "References with no objects"
    ],
    answer: "Objects with no references"
  },
  {
    question: "How many times is the finalize() method invoked in Java?",
    options: [
      "Multiple times before garbage collection",
      "Only once before garbage collection",
      "Every time an object is referenced",
      "It depends on JVM settings"
    ],
    answer: "Only once before garbage collection"
  },
  {
    question: "Who invokes the finalize() method in Java?",
    options: [
      "The programmer",
      "The JVM garbage collector",
      "The main thread",
      "The OS kernel"
    ],
    answer: "The JVM garbage collector"
  },
  {
    question: "Can we pass objects as arguments in Java?",
    options: [
      "Yes",
      "No",
      "Only immutable objects",
      "Only if class implements Serializable"
    ],
    answer: "Yes"
  },
  {
    question: "What are wrapper classes in Java?",
    options: [
      "Classes that contain arrays",
      "Classes that wrap primitive data types into objects",
      "Classes used only for file handling",
      "Classes used to wrap exceptions"
    ],
    answer: "Classes that wrap primitive data types into objects"
  },
  {
    question: "Which of the following is TRUE about wrapper classes?",
    options: [
      "They belong to java.util package",
      "They convert objects into primitives only",
      "They allow primitives to be used in OOP concepts",
      "They are always mutable"
    ],
    answer: "They allow primitives to be used in OOP concepts"
  },
  {
    question: "What are transient variables in Java?",
    options: [
      "Variables that cannot be inherited",
      "Variables that are not serialized",
      "Variables that cannot be modified",
      "Variables used only in inner classes"
    ],
    answer: "Variables that are not serialized"
  },
  {
    question: "Can we serialize static variables in Java?",
    options: [
      "Yes",
      "No",
      "Only final static variables",
      "Only if marked transient"
    ],
    answer: "No"
  },
  {
    question: "What is type conversion in Java?",
    options: [
      "Changing a class into an interface",
      "Changing one data type into another",
      "Changing a variable name",
      "Changing access modifiers"
    ],
    answer: "Changing one data type into another"
  },
  {
    question: "What is automatic type conversion in Java?",
    options: [
      "Conversion from higher type to lower type automatically",
      "Conversion from lower type to higher type automatically (widening)",
      "Conversion that must be done manually",
      "Conversion only for boolean types"
    ],
    answer: "Conversion from lower type to higher type automatically (widening)"
  },
  {
    question: "What is narrowing conversion in Java?",
    options: [
      "Automatic widening conversion",
      "Manual conversion from higher type to lower type",
      "Conversion done by JVM automatically",
      "Conversion only for objects"
    ],
    answer: "Manual conversion from higher type to lower type"
  },
  {
    question: "What is the importance of the import keyword in Java?",
    options: [
      "It is used to load JRE",
      "It is used to include external classes and packages",
      "It is used for exception handling",
      "It is used to access private members"
    ],
    answer: "It is used to include external classes and packages"
  },
  {
    question: "What is the naming convention for packages in Java?",
    options: [
      "Uppercase names",
      "CamelCase names",
      "Reverse domain naming convention",
      "Spaces allowed in names"
    ],
    answer: "Reverse domain naming convention"
  },
  {
    question: "What is classpath in Java?",
    options: [
      "A keyword in Java",
      "A location where JVM searches for classes and packages",
      "A path to JDK installation",
      "A path for storing jar files only"
    ],
    answer: "A location where JVM searches for classes and packages"
  },
  {
    question: "What is a JAR in Java?",
    options: [
      "Java Access Rule",
      "A file format that groups many Java classes and resources",
      "A Java runtime environment",
      "A debugging tool"
    ],
    answer: "A file format that groups many Java classes and resources"
  },
  {
    question: "What is the scope of instance variables in Java?",
    options: [
      "Throughout the class and each object gets its own copy",
      "Only inside methods",
      "Only inside constructors",
      "Only during compile time"
    ],
    answer: "Throughout the class and each object gets its own copy"
  },
  {
    question: "What is the scope of class/static variables?",
    options: [
      "Only inside objects",
      "Shared among all objects of the class",
      "Only inside constructors",
      "Only inside static blocks"
    ],
    answer: "Shared among all objects of the class"
  },
  {
    question: "What is the scope of local variables in Java?",
    options: [
      "Throughout the class",
      "Throughout the package",
      "Only within the method/block where declared",
      "Throughout the JVM"
    ],
    answer: "Only within the method/block where declared"
  },
  {
    question: "What are static imports in Java?",
    options: [
      "Importing only static methods and variables of a class",
      "Importing only interfaces",
      "Importing non-static methods",
      "Importing packages without names"
    ],
    answer: "Importing only static methods and variables of a class"
  },
  {
    question: "Can we define static methods inside an interface?",
    options: [
      "Yes",
      "No",
      "Only in Java 6",
      "Only if the interface is abstract"
    ],
    answer: "Yes"
  },
  {
    question: "What is an interface in Java?",
    options: [
      "A class with only static methods",
      "A blueprint of a class with abstract methods",
      "A data type used only for collections",
      "A method that returns multiple values"
    ],
    answer: "A blueprint of a class with abstract methods"
  },
  {
    question: "Which of the following is a feature of interfaces in Java?",
    options: [
      "Interfaces can have constructors",
      "Interfaces allow multiple inheritance",
      "Interfaces allow private instance fields",
      "Interfaces cannot contain abstract methods"
    ],
    answer: "Interfaces allow multiple inheritance"
  },
  {
    question: "What is an enumeration (enum) in Java?",
    options: [
      "A class used to perform calculations",
      "A special datatype that defines a set of constants",
      "A collection type storing key-value pairs",
      "A datatype used only for loops"
    ],
    answer: "A special datatype that defines a set of constants"
  },
  {
    question: "Which of the following is a restriction on Java enums?",
    options: [
      "Enums cannot have fields",
      "Enums cannot have methods",
      "Enums cannot extend another class",
      "Enums cannot implement interfaces"
    ],
    answer: "Enums cannot extend another class"
  },
  {
    question: "What is field hiding in Java?",
    options: [
      "When subclass defines a field with the same name as superclass field",
      "When variables are placed in private block",
      "When methods override parent methods",
      "When class hides its constructor"
    ],
    answer: "When subclass defines a field with the same name as superclass field"
  },
  {
    question: "What is Varargs in Java?",
    options: [
      "A way to store multiple arrays",
      "A method to create variable length constructors",
      "A feature allowing methods to accept variable number of arguments",
      "A feature that allows returning multiple values"
    ],
    answer: "A feature allowing methods to accept variable number of arguments"
  },
  {
    question: "Where are local variables stored in Java memory?",
    options: ["Stack", "Heap", "Method area", "Permanent generation"],
    answer: "Stack"
  },
  {
    question: "Can we use switch statements with Strings in Java?",
    options: ["Yes, from Java 5", "Yes, from Java 7", "No", "Only in Java 11+"],
    answer: "Yes, from Java 7"
  },
  {
    question: "Which is the correct way to copy objects in Java?",
    options: [
      "Assignment operator",
      "clone() method",
      "Using == operator",
      "Using copy constructor only"
    ],
    answer: "clone() method"
  },
  {
    question: "Which best describes a procedural or structured programming language?",
    options: [
      "Follows class and object model",
      "Follows top-down approach using procedures/functions",
      "Follows data abstraction and encapsulation",
      "Supports interfaces and inheritance"
    ],
    answer: "Follows top-down approach using procedures/functions"
  },
  {
    question: "Which describes Object-Oriented Programming (OOP)?",
    options: [
      "Uses functions to break down program",
      "Based on objects and classes",
      "Does not support data hiding",
      "Uses top-down approach"
    ],
    answer: "Based on objects and classes"
  },
  {
    question: "Which is a benefit of Object-Oriented Programming?",
    options: [
      "No code reusability",
      "High coupling",
      "Supports inheritance and polymorphism",
      "Does not allow modularity"
    ],
    answer: "Supports inheritance and polymorphism"
  },
  {
    question: "Which is a key difference between traditional and object-oriented programming?",
    options: [
      "Traditional uses objects, OOP does not",
      "OOP uses top-down approach, traditional uses bottom-up",
      "Traditional focuses on functions, OOP focuses on objects",
      "Traditional supports inheritance, OOP does not"
    ],
    answer: "Traditional focuses on functions, OOP focuses on objects"
  },
  {
    question: "Which option lists all four core OOP concepts?",
    options: [
      "Abstraction, Overloading, Interface, Classes",
      "Encapsulation, Inheritance, Polymorphism, Abstraction",
      "Variables, Objects, Arrays, Loops",
      "Methods, Fields, Classes, Constructors"
    ],
    answer: "Encapsulation, Inheritance, Polymorphism, Abstraction"
  },
  {
    question: "What is Encapsulation?",
    options: [
      "Wrapping data and methods into a single unit",
      "Creating multiple objects",
      "Writing functions inside classes",
      "Hiding all constructors"
    ],
    answer: "Wrapping data and methods into a single unit"
  },
  {
    question: "What is Inheritance?",
    options: [
      "Hiding sensitive data",
      "Creating multiple methods with same name",
      "Deriving new classes from existing classes",
      "Separating interface from implementation"
    ],
    answer: "Deriving new classes from existing classes"
  },
  {
    question: "Why is inheritance important?",
    options: [
      "It decreases code reusability",
      "It avoids dynamic binding",
      "It supports method overriding and code reuse",
      "It removes need for constructors"
    ],
    answer: "It supports method overriding and code reuse"
  },
  {
    question: "What is Polymorphism in Java?",
    options: [
      "Ability to perform different tasks using same interface",
      "Ability to hide implementation details",
      "Ability to access private variables",
      "Ability to convert from one datatype to another"
    ],
    answer: "Ability to perform different tasks using same interface"
  },
  {
    question: "What is the Java Collections Framework?",
    options: [
      "A set of classes for designing GUIs",
      "A unified architecture for storing and manipulating data",
      "A library for networking",
      "A package for multithreading"
    ],
    answer: "A unified architecture for storing and manipulating data"
  },
  {
    question: "What is a Collection in Java?",
    options: [
      "An interface representing a group of objects",
      "A class used to create arrays",
      "A map of key-value pairs",
      "A tool for JVM optimization"
    ],
    answer: "An interface representing a group of objects"
  },
  {
    question: "Which is the correct difference between collection, Collection, and Collections?",
    options: [
      "collection is a class, Collection is an interface, Collections is a package",
      "collection is a package, Collection is a class, Collections is interface",
      "Collection is an interface, Collections is utility class, collection does not exist",
      "All three are interfaces"
    ],
    answer: "Collection is an interface, Collections is utility class, collection does not exist"
  },
  {
    question: "What does the Collection interface in Java represent?",
    options: [
      "A group of key-value pairs",
      "A root interface for all collection types",
      "A class handling arrays",
      "A framework for file handling"
    ],
    answer: "A root interface for all collection types"
  },
  {
    question: "Which interfaces extend the Collection interface?",
    options: [
      "List, Set, Queue",
      "Map, Set, Queue",
      "Vector, Map, Deque",
      "HashMap, TreeMap, List"
    ],
    answer: "List, Set, Queue"
  },
  {
    question: "Which statement about the List interface is correct?",
    options: [
      "List stores unique elements only",
      "List preserves insertion order and allows duplicates",
      "List does not allow indexing",
      "List sorts elements automatically"
    ],
    answer: "List preserves insertion order and allows duplicates"
  },
  {
    question: "Which method is specific to the List interface?",
    options: ["add()", "remove()", "get(int index)", "size()"],
    answer: "get(int index)"
  },
  {
    question: "Which are implementations of the List interface?",
    options: ["ArrayList, LinkedList, Vector", "HashSet, TreeSet, LinkedHashSet", "HashMap, TreeMap", "Queue, Deque"],
    answer: "ArrayList, LinkedList, Vector"
  },
  {
    question: "Which describes an ArrayList?",
    options: [
      "A resizable array implementation of List",
      "A doubly linked list",
      "A synchronized legacy class",
      "A key-value data structure"
    ],
    answer: "A resizable array implementation of List"
  },
  {
    question: "What is a key difference between Array and ArrayList?",
    options: [
      "ArrayList is fixed size, array is dynamic",
      "Array supports generics, ArrayList does not",
      "ArrayList is dynamic, array is fixed size",
      "Array can store only objects, ArrayList stores primitives"
    ],
    answer: "ArrayList is dynamic, array is fixed size"
  },
  {
    question: "What is a Vector in Java?",
    options: [
      "A legacy synchronized dynamic array",
      "A non-synchronized List implementation",
      "A map implementation",
      "A type of linked list"
    ],
    answer: "A legacy synchronized dynamic array"
  },
  {
    question: "Which is a difference between ArrayList and Vector?",
    options: [
      "ArrayList is synchronized, Vector is not",
      "Vector is synchronized, ArrayList is not",
      "Both are synchronized",
      "Vector cannot store null values"
    ],
    answer: "Vector is synchronized, ArrayList is not"
  },
  {
    question: "Which describes LinkedList and its features?",
    options: [
      "It uses dynamic arrays",
      "It is a doubly linked list and allows fast insert/delete",
      "It does not allow duplicates",
      "It always maintains sorted order"
    ],
    answer: "It is a doubly linked list and allows fast insert/delete"
  },
  {
    question: "Which is true about Iterator in Java?",
    options: [
      "It can iterate backward only",
      "It is used to iterate elements sequentially",
      "It is used for key-value traversal",
      "It can modify elements"
    ],
    answer: "It is used to iterate elements sequentially"
  },
  {
    question: "In which order does Iterator traverse a List collection?",
    options: [
      "Reverse order",
      "No guaranteed order",
      "Insertion order",
      "Sorted order"
    ],
    answer: "Insertion order"
  },
  {
    question: "Which is true about ListIterator?",
    options: [
      "It supports forward traversal only",
      "It supports bidirectional traversal",
      "It is used for Set traversal",
      "It cannot modify elements"
    ],
    answer: "It supports bidirectional traversal"
  },
  {
    question: "Which describes Set in Java?",
    options: [
      "Allows duplicate values",
      "Does not maintain insertion order",
      "Allows indexing",
      "Stores key-value pairs"
    ],
    answer: "Does not maintain insertion order"
  },
  {
    question: "Which are implementations of the Set interface?",
    options: ["HashSet, TreeSet, LinkedHashSet", "ArrayList, LinkedList", "Vector, Stack", "HashMap, TreeMap"],
    answer: "HashSet, TreeSet, LinkedHashSet"
  },
  {
    question: "What is HashSet?",
    options: [
      "A linked list storage structure",
      "A hash table-based implementation of Set",
      "A sorted set structure",
      "A synchronized Set implementation"
    ],
    answer: "A hash table-based implementation of Set"
  },
  {
    question: "What is TreeSet?",
    options: [
      "Stores elements in insertion order",
      "Stores elements in sorted order",
      "Does not use tree structure",
      "Allows duplicate elements"
    ],
    answer: "Stores elements in sorted order"
  },
  {
    question: "When should HashSet be preferred over TreeSet?",
    options: [
      "When sorting is required",
      "When insertion and search must be faster",
      "When duplicates must be allowed",
      "When traversal must be in sorted order"
    ],
    answer: "When insertion and search must be faster"
  },
  {
    question: "What is LinkedHashSet?",
    options: [
      "A set that stores elements in sorted order",
      "A hash table with linked list to maintain insertion order",
      "A synchronized hash set",
      "A key-value mapping structure"
    ],
    answer: "A hash table with linked list to maintain insertion order"
  },
  {
    question: "What does the Map interface represent in Java?",
    options: [
      "Collection of unique elements",
      "Key-value pairs with no duplicate keys",
      "A list of objects",
      "A sorted array"
    ],
    answer: "Key-value pairs with no duplicate keys"
  },
  {
    question: "Which best describes LinkedHashMap?",
    options: [
      "Stores data in sorted order",
      "Stores key-value pairs in insertion order",
      "A thread-safe map implementation",
      "A purely tree-based map"
    ],
    answer: "Stores key-value pairs in insertion order"
  },
  {
    question: "What is the SortedMap interface in Java?",
    options: [
      "A map that stores key-value pairs in insertion order",
      "A map that stores keys in sorted order",
      "A map that stores values in sorted order",
      "A synchronized map implementation"
    ],
    answer: "A map that stores keys in sorted order"
  },
  {
    question: "Which describes a Hashtable in Java?",
    options: [
      "A non-synchronized map",
      "A synchronized, legacy hash table implementation",
      "A sorted map implementation",
      "A thread-local data structure"
    ],
    answer: "A synchronized, legacy hash table implementation"
  },
  {
    question: "Which is a key difference between HashMap and Hashtable?",
    options: [
      "HashMap is synchronized, Hashtable is not",
      "Hashtable allows null keys and values",
      "HashMap allows null keys and values; Hashtable does not",
      "Hashtable is faster than HashMap"
    ],
    answer: "HashMap allows null keys and values; Hashtable does not"
  },
  {
    question: "What is a main difference between ArrayList and LinkedList?",
    options: [
      "ArrayList is faster for insertion, LinkedList is faster for access",
      "ArrayList is indexed; LinkedList is node-based",
      "LinkedList is fixed size",
      "LinkedList cannot store duplicates"
    ],
    answer: "ArrayList is indexed; LinkedList is node-based"
  },
  {
    question: "What is the difference between Comparator and Comparable?",
    options: [
      "Comparable defines multiple sorting methods",
      "Comparator is used for custom sorting; Comparable provides natural sorting",
      "Comparator requires modifying the class",
      "Comparable is used only for numbers"
    ],
    answer: "Comparator is used for custom sorting; Comparable provides natural sorting"
  },
  {
    question: "What is ConcurrentHashMap?",
    options: [
      "A fully synchronized map",
      "A thread-safe map using locking at the method level",
      "A thread-safe map using segment-based or bucket-level locking",
      "A map with sorted keys"
    ],
    answer: "A thread-safe map using segment-based or bucket-level locking"
  },
  {
    question: "Which is a key difference among ConcurrentHashMap, Hashtable, and synchronizedHashMap?",
    options: [
      "ConcurrentHashMap locks the entire map",
      "Hashtable allows null keys",
      "ConcurrentHashMap uses partial locking, others use full map locking",
      "SynchronizedHashMap is faster than ConcurrentHashMap"
    ],
    answer: "ConcurrentHashMap uses partial locking, others use full map locking"
  },
  {
    question: "What is CopyOnWriteArrayList used for?",
    options: [
      "For high read, low write operations",
      "For frequent updates",
      "For storing primitives",
      "For sorted operations only"
    ],
    answer: "For high read, low write operations"
  },
  {
    question: "What are fail-fast iterators in Java?",
    options: [
      "Iterators that never throw exceptions",
      "Iterators that work on a cloned collection",
      "Iterators that throw ConcurrentModificationException when structure changes",
      "Iterators that allow safe modification during iteration"
    ],
    answer: "Iterators that throw ConcurrentModificationException when structure changes"
  },
  {
    question: "What are fail-safe iterators?",
    options: [
      "Iterators that operate on the original collection",
      "Iterators that operate on a cloned copy of the collection",
      "Iterators that throw exceptions when modified",
      "Iterators that block writes"
    ],
    answer: "Iterators that operate on a cloned copy of the collection"
  },
  {
    question: "What is serialization in Java?",
    options: [
      "Saving an object's state to a file or stream",
      "Copying objects to memory",
      "Executing methods remotely",
      "Encrypting objects"
    ],
    answer: "Saving an object's state to a file or stream"
  },
  {
    question: "What is the main purpose of serialization?",
    options: [
      "To provide multithreading",
      "To store objects in databases only",
      "To send objects over network or save to disk",
      "To secure objects"
    ],
    answer: "To send objects over network or save to disk"
  },
  {
    question: "Which is an alternative to Java serialization?",
    options: ["JSON", "XML", "Protocol Buffers", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which describes the Serializable interface?",
    options: [
      "An interface with abstract methods",
      "A marker interface with no methods",
      "An interface for cloning",
      "An interface for networking"
    ],
    answer: "A marker interface with no methods"
  },
  {
    question: "How do you make a class serializable?",
    options: [
      "Extend Thread class",
      "Implement Serializable interface",
      "Use keyword serialize",
      "Call serialize() method"
    ],
    answer: "Implement Serializable interface"
  },
  {
    question: "What is serialVersionUID?",
    options: [
      "A unique identifier for version control of serialized objects",
      "A security key",
      "A type of class loader",
      "A thread identifier"
    ],
    answer: "A unique identifier for version control of serialized objects"
  },
  {
    question: "What happens if serialVersionUID is not defined?",
    options: [
      "Java automatically generates one",
      "Serialization will fail",
      "Compilation error occurs",
      "Object becomes immutable"
    ],
    answer: "Java automatically generates one"
  },
  {
    question: "Can static variables be serialized in Java?",
    options: ["Yes", "No", "Only in Java 11+", "Only if marked final"],
    answer: "No"
  },
  {
    question: "Does serialization save object references?",
    options: [
      "No, only the object is saved",
      "Yes, it serializes the entire object graph",
      "Only shallow references",
      "Only primitive values"
    ],
    answer: "Yes, it serializes the entire object graph"
  },
  {
    question: "How do you prevent some fields from being serialized?",
    options: [
      "Mark them as private",
      "Use static keyword",
      "Mark them with transient keyword",
      "Annotate with @Skip"
    ],
    answer: "Mark them with transient keyword"
  }
];