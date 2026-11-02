window.BUNDLED_QUIZ_BANKS = [
{
    "jobRole": "Python AI ML Engineer",
    "assessmentTitle": "Python AI ML Engineer Technical Assessment",
    "experienceLevels": [
        "JUNIOR",
        "MID",
        "SENIOR"
    ],
    "assessmentConfig": {
        "totalQuestions": 25,
        "totalTimeMins": 35,
        "difficultyDistribution": {
            "JUNIOR": {
                "EASY": 60,
                "MEDIUM": 30,
                "HARD": 10
            },
            "MID": {
                "EASY": 20,
                "MEDIUM": 60,
                "HARD": 20
            },
            "SENIOR": {
                "EASY": 10,
                "MEDIUM": 50,
                "HARD": 40
            }
        },
        "questionTypeDistribution": {
            "MCQ": 80,
            "FILL_IN_THE_BLANK": 20
        }
    },
    "questionBank": [
        {
            "questionId": "PAIML001",
            "topic": "Python",
            "subTopic": "OOP Concepts",
            "experienceLevel": [
                "JUNIOR",
                "MID"
            ],
            "difficulty": "EASY",
            "questionType": "MCQ",
            "question": "What is an abstract class in Python?",
            "options": [
                "An abstract class is the name for any class from which you can instantiate an object.",
                "Abstract classes must be redefined any time an object is instantiated from them.",
                "An abstract class exists only so that other 'concrete' classes can inherit from the abstract class.",
                "Abstract classes must inherit from concrete classes."
            ],
            "correctAnswer": [
                "An abstract class exists only so that other 'concrete' classes can inherit from the abstract class."
            ],
            "explanation": "An abstract class exists only so that other concrete classes can inherit from it. It cannot be instantiated on its own."
        },
        {
            "questionId": "PAIML002",
            "topic": "Python",
            "subTopic": "Built-in Functions",
            "experienceLevel": [
                "JUNIOR"
            ],
            "difficulty": "EASY",
            "questionType": "MCQ",
            "question": "What happens when you use the built-in function `any()` on a list?",
            "options": [
                "The `any()` function will randomly return any item from the list.",
                "The `any()` function returns True if any item in the list evaluates to True. Otherwise, it returns False.",
                "The `any()` function takes as arguments the list to check inside, and the item to check for.",
                "The `any()` function returns a Boolean value that answers the question 'Are there any items in this list?'"
            ],
            "correctAnswer": [
                "The `any()` function returns True if any item in the list evaluates to True. Otherwise, it returns False."
            ],
            "explanation": "The `any()` function iterates through the iterable and returns True if at least one element evaluates to True."
        },
        {
            "questionId": "PAIML003",
            "topic": "Python",
            "subTopic": "Data Structures & Complexity",
            "experienceLevel": [
                "MID",
                "SENIOR"
            ],
            "difficulty": "MEDIUM",
            "questionType": "MCQ",
            "question": "What is the average runtime complexity of accessing a value in a Python dictionary by using its key?",
            "options": [
                "O(n), also called linear time.",
                "O(log n), also called logarithmic time.",
                "O(n^2), also called quadratic time.",
                "O(1), also called constant time."
            ],
            "correctAnswer": [
                "O(1), also called constant time."
            ],
            "explanation": "Python dictionaries are implemented as hash tables, allowing for O(1) average time complexity for lookups, insertions, and deletions."
        },
        {
            "questionId": "PAIML004",
            "topic": "Machine Learning",
            "subTopic": "Model Evaluation",
            "experienceLevel": [
                "JUNIOR",
                "MID"
            ],
            "difficulty": "MEDIUM",
            "questionType": "MCQ",
            "question": "What is overfitting in machine learning?",
            "options": [
                "When the model is too simple",
                "When the model performs well on training data but poorly on new data",
                "When the data is corrupted",
                "When the algorithm runs too slowly"
            ],
            "correctAnswer": [
                "When the model performs well on training data but poorly on new data"
            ],
            "explanation": "Overfitting occurs when the model learns noise from the training data instead of general patterns, leading to poor generalization on unseen data."
        },
        {
            "questionId": "PAIML005",
            "topic": "Machine Learning",
            "subTopic": "Deep Learning",
            "experienceLevel": [
                "MID",
                "SENIOR"
            ],
            "difficulty": "MEDIUM",
            "questionType": "FILL_IN_THE_BLANK",
            "question": "Deep Learning is a specialized subset of machine learning that uses neural networks with multiple ______ layers to progressively extract higher-level features.",
            "options": [],
            "correctAnswer": [
                "hidden",
                "deep"
            ],
            "explanation": "Deep Learning relies on neural networks with multiple deep/hidden layers to learn complex representations from raw input."
        },
        {
            "questionId": "PAIML006",
            "topic": "Machine Learning",
            "subTopic": "Unsupervised Learning",
            "experienceLevel": [
                "MID",
                "SENIOR"
            ],
            "difficulty": "MEDIUM",
            "questionType": "MCQ",
            "question": "Which statement about K-means clustering is true?",
            "options": [
                "In K-means clustering, the initial centroids are sometimes randomly selected.",
                "K-means clustering is often used in supervised machine learning.",
                "The number of clusters are always randomly selected.",
                "To be accurate, you want your centroids outside of the cluster."
            ],
            "correctAnswer": [
                "In K-means clustering, the initial centroids are sometimes randomly selected."
            ],
            "explanation": "K-means is an unsupervised algorithm where initial centroids are often randomly selected, which can impact the final cluster formation."
        },
        {
            "questionId": "PAIML007",
            "topic": "Machine Learning",
            "subTopic": "Supervised Learning",
            "experienceLevel": [
                "MID",
                "SENIOR"
            ],
            "difficulty": "MEDIUM",
            "questionType": "MCQ",
            "question": "Why is naive Bayes called naive?",
            "options": [
                "It naively assumes that you will have no data.",
                "It does not even try to create accurate predictions.",
                "It naively assumes that the predictors are independent from one another.",
                "It naively assumes that all the predictors depend on one another."
            ],
            "correctAnswer": [
                "It naively assumes that the predictors are independent from one another."
            ],
            "explanation": "Naive Bayes is called 'naive' because it assumes that all features (predictors) are independent of each other, which is rarely true in real-world data."
        },
        {
            "questionId": "PAIML008",
            "topic": "Machine Learning",
            "subTopic": "Model Optimization",
            "experienceLevel": [
                "SENIOR"
            ],
            "difficulty": "HARD",
            "questionType": "MCQ",
            "question": "What is the main purpose of using regularization in machine learning models?",
            "options": [
                "To increase the complexity of the model",
                "To reduce the variance of the model",
                "To increase the bias of the model",
                "To reduce the computational cost of the model"
            ],
            "correctAnswer": [
                "To reduce the variance of the model"
            ],
            "explanation": "Regularization adds a penalty term to the loss function to prevent overfitting, encouraging simpler models and thereby reducing variance."
        },
        {
            "questionId": "PAIML009",
            "topic": "Python",
            "subTopic": "Advanced Concepts",
            "experienceLevel": [
                "SENIOR"
            ],
            "difficulty": "HARD",
            "questionType": "MCQ",
            "question": "Which statement about Python's Global Interpreter Lock (GIL) is correct?",
            "options": [
                "GIL allows true parallelism for CPU-bound tasks",
                "GIL prevents multiple native threads from executing Python bytecodes simultaneously",
                "GIL only affects I/O operations",
                "GIL can be disabled in standard CPython"
            ],
            "correctAnswer": [
                "GIL prevents multiple native threads from executing Python bytecodes simultaneously"
            ],
            "explanation": "The GIL is a mutex that allows only one thread to hold the control of the Python interpreter, meaning CPU-bound threads cannot run in true parallel in standard CPython."
        },
        {
            "questionId": "PAIML010",
            "topic": "Machine Learning",
            "subTopic": "Evaluation Metrics",
            "experienceLevel": [
                "MID",
                "SENIOR"
            ],
            "difficulty": "HARD",
            "questionType": "FILL_IN_THE_BLANK",
            "question": "For imbalanced classification problems, the ______ is the best metric as it balances precision and recall.",
            "options": [],
            "correctAnswer": [
                "F1-Score",
                "F1 score",
                "f1-score"
            ],
            "explanation": "F1-Score is the harmonic mean of precision and recall, making it ideal for imbalanced datasets where accuracy can be misleading."
        },
        {
            "questionId": "PAIML011",
            "topic": "Python",
            "subTopic": "Iterables & Generators",
            "experienceLevel": [
                "MID"
            ],
            "difficulty": "MEDIUM",
            "questionType": "MCQ",
            "question": "What does a generator return in Python?",
            "options": [
                "None",
                "An iterable object",
                "A linked list data structure from a non-empty list",
                "All the keys of the given dictionary"
            ],
            "correctAnswer": [
                "An iterable object"
            ],
            "explanation": "A generator returns an iterable object that produces values on-demand using the `yield` keyword, saving memory compared to lists."
        },
        {
            "questionId": "PAIML012",
            "topic": "Machine Learning",
            "subTopic": "Reinforcement Learning",
            "experienceLevel": [
                "MID",
                "SENIOR"
            ],
            "difficulty": "MEDIUM",
            "questionType": "MCQ",
            "question": "You created a machine learning system that interacts with its environment and responds to errors and rewards. What type of machine learning system is it?",
            "options": [
                "supervised learning",
                "semi-supervised learning",
                "reinforcement learning",
                "unsupervised learning"
            ],
            "correctAnswer": [
                "reinforcement learning"
            ],
            "explanation": "Reinforcement learning is a type of machine learning where an agent learns to make decisions by interacting with an environment and receiving rewards or penalties."
        },
        {
            "questionId": "PAIML013",
            "topic": "Python",
            "subTopic": "Functions & Memory",
            "experienceLevel": [
                "MID",
                "SENIOR"
            ],
            "difficulty": "MEDIUM",
            "questionType": "MCQ",
            "question": "What is the output of the following code?\n```python\ndef add_item(item, item_list=[]):\n    item_list.append(item)\n    return item_list\nprint(add_item(1))\nprint(add_item(2))\n```",
            "options": [
                "[1] \n [2]",
                "[1] \n [1, 2]",
                "[1, 2] \n [1, 2]",
                "Error"
            ],
            "correctAnswer": [
                "[1] \n [1, 2]"
            ],
            "explanation": "Default mutable arguments (like lists) are evaluated only once when the function is defined. Subsequent calls share the same default list, accumulating values."
        },
        {
            "questionId": "PAIML014",
            "topic": "Machine Learning",
            "subTopic": "Optimization Algorithms",
            "experienceLevel": [
                "MID",
                "SENIOR"
            ],
            "difficulty": "MEDIUM",
            "questionType": "MCQ",
            "question": "What is the purpose of 'gradient descent' in training neural networks?",
            "options": [
                "To increase the loss function",
                "To minimize the loss function",
                "To normalize input data",
                "To calculate feature importance"
            ],
            "correctAnswer": [
                "To minimize the loss function"
            ],
            "explanation": "Gradient Descent minimizes the loss by updating model parameters in the opposite direction of the gradient of the loss function."
        },
        {
            "questionId": "PAIML015",
            "topic": "Python",
            "subTopic": "Advanced Concepts",
            "experienceLevel": [
                "SENIOR"
            ],
            "difficulty": "HARD",
            "questionType": "MCQ",
            "question": "Why would you use a decorator in Python?",
            "options": [
                "A decorator is similar to a class and should be used if you are doing functional programming instead of object-oriented programming.",
                "A decorator is a visual indicator to someone reading your code that a portion of your code is critical.",
                "You use the decorator to alter the functionality of a function without having to modify the function code.",
                "An import statement is preceded by a decorator, python knows to import the most recent version of whatever package or library is being imported."
            ],
            "correctAnswer": [
                "You use the decorator to alter the functionality of a function without having to modify the function code."
            ],
            "explanation": "Decorators allow us to wrap another function to extend the behavior of the wrapped function, without permanently modifying it."
        },
        {
            "questionId": "PAIML016",
            "topic": "Machine Learning",
            "subTopic": "Supervised Learning",
            "experienceLevel": [
                "JUNIOR",
                "MID"
            ],
            "difficulty": "EASY",
            "questionType": "MCQ",
            "question": "Which of the following is an example of supervised learning?",
            "options": [
                "K-Means Clustering",
                "Linear Regression",
                "Principal Component Analysis",
                "DBSCAN"
            ],
            "correctAnswer": [
                "Linear Regression"
            ],
            "explanation": "Linear regression is a supervised learning algorithm because it learns from labeled data to predict a continuous target variable."
        },
        {
            "questionId": "PAIML017",
            "topic": "Python",
            "subTopic": "OOP Concepts",
            "experienceLevel": [
                "JUNIOR",
                "MID"
            ],
            "difficulty": "MEDIUM",
            "questionType": "FILL_IN_THE_BLANK",
            "question": "In Python, the ______ method acts as a constructor and is called automatically whenever a new object is created from a class.",
            "options": [],
            "correctAnswer": [
                "__init__",
                "__init__()"
            ],
            "explanation": "The `__init__` method initializes the initial state of a new object and is automatically called upon instantiation."
        },
        {
            "questionId": "PAIML018",
            "topic": "Machine Learning",
            "subTopic": "Dimensionality Reduction",
            "experienceLevel": [
                "MID",
                "SENIOR"
            ],
            "difficulty": "MEDIUM",
            "questionType": "MCQ",
            "question": "Which algorithm is best suited for dimensionality reduction?",
            "options": [
                "KNN",
                "Naive Bayes",
                "PCA (Principal Component Analysis)",
                "Random Forest"
            ],
            "correctAnswer": [
                "PCA (Principal Component Analysis)"
            ],
            "explanation": "PCA transforms high-dimensional data into fewer dimensions while retaining the maximum possible variance."
        },
        {
            "questionId": "PAIML019",
            "topic": "Python",
            "subTopic": "Data Structures",
            "experienceLevel": [
                "JUNIOR",
                "MID"
            ],
            "difficulty": "EASY",
            "questionType": "MCQ",
            "question": "What is the primary difference between lists and tuples in Python?",
            "options": [
                "Lists are immutable, tuples are mutable.",
                "Lists are mutable, meaning you can change the data inside them. Tuples are immutable.",
                "Lists can only hold integers, tuples can hold any data type.",
                "There is no difference between lists and tuples."
            ],
            "correctAnswer": [
                "Lists are mutable, meaning you can change the data inside them. Tuples are immutable."
            ],
            "explanation": "Lists are mutable (can be changed after creation), while tuples are immutable (cannot be changed after creation)."
        },
        {
            "questionId": "PAIML020",
            "topic": "Machine Learning",
            "subTopic": "Deep Learning",
            "experienceLevel": [
                "SENIOR"
            ],
            "difficulty": "HARD",
            "questionType": "MCQ",
            "question": "What problem commonly occurs in deep neural networks when gradients become exceedingly small during backpropagation?",
            "options": [
                "Exploding gradients",
                "Vanishing gradients",
                "Overfitting",
                "Underfitting"
            ],
            "correctAnswer": [
                "Vanishing gradients"
            ],
            "explanation": "Vanishing gradients occur when gradients become too small during backpropagation, preventing earlier layers from learning effectively."
        },
        {
            "questionId": "PAIML021",
            "topic": "Machine Learning",
            "subTopic": "Model Evaluation",
            "experienceLevel": [
                "MID",
                "SENIOR"
            ],
            "difficulty": "MEDIUM",
            "questionType": "FILL_IN_THE_BLANK",
            "question": "______ is a resampling procedure used to evaluate machine learning models on a limited data sample by partitioning the data into multiple folds.",
            "options": [],
            "correctAnswer": [
                "Cross-validation",
                "K-fold cross-validation",
                "k-fold cross validation"
            ],
            "explanation": "Cross-validation uses multiple folds to reduce variance in performance estimates and provides a more reliable estimate of model performance."
        },
        {
            "questionId": "PAIML022",
            "topic": "Python",
            "subTopic": "Functions",
            "experienceLevel": [
                "JUNIOR",
                "MID"
            ],
            "difficulty": "EASY",
            "questionType": "MCQ",
            "question": "Which statement about Python's `*args` and `**kwargs` is correct?",
            "options": [
                "`*args` captures keyword arguments, `**kwargs` captures positional arguments",
                "`*args` captures positional arguments, `**kwargs` captures keyword arguments",
                "Both capture the same type of arguments",
                "They can only be used together"
            ],
            "correctAnswer": [
                "`*args` captures positional arguments, `**kwargs` captures keyword arguments"
            ],
            "explanation": "`*args` allows passing a variable number of non-keyword (positional) arguments, while `**kwargs` allows passing a variable number of keyword arguments."
        },
        {
            "questionId": "PAIML023",
            "topic": "Machine Learning",
            "subTopic": "Model Evaluation",
            "experienceLevel": [
                "MID",
                "SENIOR"
            ],
            "difficulty": "MEDIUM",
            "questionType": "MCQ",
            "question": "What does a confusion matrix show?",
            "options": [
                "Model loss over time",
                "True positives, false positives, true negatives, and false negatives",
                "Feature correlations",
                "Decision boundaries"
            ],
            "correctAnswer": [
                "True positives, false positives, true negatives, and false negatives"
            ],
            "explanation": "A confusion matrix summarizes prediction outcomes for classification models, showing the counts of TP, FP, TN, and FN."
        },
        {
            "questionId": "PAIML024",
            "topic": "Python",
            "subTopic": "Advanced Concepts",
            "experienceLevel": [
                "SENIOR"
            ],
            "difficulty": "HARD",
            "questionType": "MCQ",
            "question": "Which statement about Python's `__slots__` is correct?",
            "options": [
                "`__slots__` increases memory usage",
                "`__slots__` restricts attribute creation and can reduce memory usage",
                "`__slots__` is only for methods",
                "`__slots__` enables multiple inheritance"
            ],
            "correctAnswer": [
                "`__slots__` restricts attribute creation and can reduce memory usage"
            ],
            "explanation": "`__slots__` prevents the creation of a `__dict__` for each instance, restricting attribute creation to only those specified and saving memory."
        },
        {
            "questionId": "PAIML025",
            "topic": "Machine Learning",
            "subTopic": "Neural Networks",
            "experienceLevel": [
                "SENIOR"
            ],
            "difficulty": "HARD",
            "questionType": "FILL_IN_THE_BLANK",
            "question": "The algorithm used to efficiently compute the gradient of the loss function with respect to the weights in a neural network is called ______.",
            "options": [],
            "correctAnswer": [
                "backpropagation",
                "back-propagation",
                "back prop"
            ],
            "explanation": "Backpropagation is the fundamental algorithm for training neural networks, efficiently calculating gradients using the chain rule of calculus."
        }
    ]
},
{
    "jobRole": "Full Stack Engineer",
    "assessmentTitle": "Full Stack Engineer Technical Assessment",
    "experienceLevels": [
        "JUNIOR",
        "MID",
        "SENIOR"
    ],
    "assessmentConfig": {
        "totalQuestions": 30,
        "totalTimeMins": 45,
        "difficultyDistribution": {
            "JUNIOR": {
                "EASY": 50,
                "MEDIUM": 30,
                "HARD": 20
            },
            "MID": {
                "EASY": 20,
                "MEDIUM": 50,
                "HARD": 30
            },
            "SENIOR": {
                "EASY": 10,
                "MEDIUM": 30,
                "HARD": 60
            }
        },
        "questionTypeDistribution": {
            "MCQ": 80,
            "FILL_IN_THE_BLANK": 20
        }
    },
    "questionBank": [
        {
            "questionId": "FSE001",
            "topic": "JavaScript",
            "subTopic": "Data Types",
            "experienceLevel": [
                "JUNIOR"
            ],
            "difficulty": "EASY",
            "questionType": "MCQ",
            "question": "What is the result of running this statement? `console.log(typeof 42);`",
            "options": [
                "'float'",
                "'value'",
                "'number'",
                "'integer'"
            ],
            "correctAnswer": [
                "'number'"
            ],
            "explanation": "The typeof operator returns 'number' for both integers and floating-point numbers in JavaScript."
        },
        {
            "questionId": "FSE002",
            "topic": "JavaScript",
            "subTopic": "Operators",
            "experienceLevel": [
                "JUNIOR"
            ],
            "difficulty": "EASY",
            "questionType": "MCQ",
            "question": "What does the `===` comparison operator do?",
            "options": [
                "Sets one variable equal to another in both value and type",
                "Tests for equality of type only",
                "Tests for equality of value only",
                "Tests for equality of value and type"
            ],
            "correctAnswer": [
                "Tests for equality of value and type"
            ],
            "explanation": "The strict equality operator (===) checks whether its two operands are equal, returning a Boolean result. It always considers operands of different types to be different."
        },
        {
            "questionId": "FSE003",
            "topic": "JavaScript",
            "subTopic": "Closures",
            "experienceLevel": [
                "MID"
            ],
            "difficulty": "MEDIUM",
            "questionType": "MCQ",
            "question": "How does a function create a closure?",
            "options": [
                "It reloads the document whenever the value changes.",
                "It returns a reference to a variable in its parent scope.",
                "It completes execution without returning.",
                "It copies a local variable to the global scope."
            ],
            "correctAnswer": [
                "It returns a reference to a variable in its parent scope."
            ],
            "explanation": "A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment). It gives you access to an outer function's scope from an inner function."
        },
        {
            "questionId": "FSE004",
            "topic": "JavaScript",
            "subTopic": "Array Methods",
            "experienceLevel": [
                "MID"
            ],
            "difficulty": "MEDIUM",
            "questionType": "MCQ",
            "question": "What is the difference between the `map()` and the `forEach()` methods on the Array prototype?",
            "options": [
                "There is no difference.",
                "The forEach() method returns a single output value, whereas the map() method performs operation on each value.",
                "The map() method returns a new array with a transformation applied on each item, whereas forEach() iterates with no return value.",
                "The forEach() method returns a new array, whereas map() iterates with no return value."
            ],
            "correctAnswer": [
                "The map() method returns a new array with a transformation applied on each item, whereas forEach() iterates with no return value."
            ],
            "explanation": "map() creates a new array populated with the results of calling a provided function on every element, while forEach() executes a provided function once for each array element without returning a new array."
        },
        {
            "questionId": "FSE005",
            "topic": "JavaScript",
            "subTopic": "Array Methods",
            "experienceLevel": [
                "MID"
            ],
            "difficulty": "MEDIUM",
            "questionType": "FILL_IN_THE_BLANK",
            "question": "The ______ method is used to add one or more elements to the end of an array.",
            "options": [],
            "correctAnswer": [
                "push",
                "push()"
            ],
            "explanation": "The push() method adds the specified elements to the end of an array and returns the new length of the array."
        },
        {
            "questionId": "FSE006",
            "topic": "JavaScript",
            "subTopic": "ES6+ Features",
            "experienceLevel": [
                "SENIOR"
            ],
            "difficulty": "HARD",
            "questionType": "MCQ",
            "question": "How can you attempt to access the property `a.b` on `obj` without throwing an error if `a` is undefined? `let obj = {};`",
            "options": [
                "obj?.a.b",
                "obj.a?.b",
                "obj[a][b]",
                "obj.?a.?b"
            ],
            "correctAnswer": [
                "obj.a?.b"
            ],
            "explanation": "Optional chaining (?.) stops evaluation and returns undefined if the value before ?. is null or undefined, preventing TypeError."
        },
        {
            "questionId": "FSE007",
            "topic": "JavaScript",
            "subTopic": "Promises",
            "experienceLevel": [
                "SENIOR"
            ],
            "difficulty": "HARD",
            "questionType": "MCQ",
            "question": "What will this code output?\n`const p1 = Promise.resolve(3);`\n`const p2 = new Promise((resolve) => setTimeout(() => resolve('foo'), 1000));`\n`const p3 = Promise.resolve(42);`\n`Promise.all([p1, p2, p3]).then((values) => { console.log(values); });`",
            "options": [
                "[3, 'foo', 42] immediately",
                "[3, 'foo', 42] after 1 second",
                "['foo', 3, 42] after 1 second",
                "The promises will execute in random order"
            ],
            "correctAnswer": [
                "[3, 'foo', 42] after 1 second"
            ],
            "explanation": "Promise.all waits for all promises to fulfill. Since p2 takes 1 second to resolve, the entire Promise.all waits for 1 second before logging the array in the original order."
        },
        {
            "questionId": "FSE008",
            "topic": "TypeScript",
            "subTopic": "Basics",
            "experienceLevel": [
                "JUNIOR"
            ],
            "difficulty": "EASY",
            "questionType": "MCQ",
            "question": "What is TypeScript?",
            "options": [
                "A JavaScript runtime environment",
                "A superset of JavaScript that adds static type definitions",
                "A JavaScript framework for building web applications",
                "A database query language"
            ],
            "correctAnswer": [
                "A superset of JavaScript that adds static type definitions"
            ],
            "explanation": "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale."
        },
        {
            "questionId": "FSE009",
            "topic": "TypeScript",
            "subTopic": "Interfaces",
            "experienceLevel": [
                "JUNIOR"
            ],
            "difficulty": "EASY",
            "questionType": "FILL_IN_THE_BLANK",
            "question": "In TypeScript, the ______ symbol is used in interfaces to make a property optional.",
            "options": [],
            "correctAnswer": [
                "?",
                "question mark"
            ],
            "explanation": "Adding a question mark (?) to the end of a property name makes it optional, allowing it to be undefined."
        },
        {
            "questionId": "FSE010",
            "topic": "TypeScript",
            "subTopic": "Types",
            "experienceLevel": [
                "MID"
            ],
            "difficulty": "MEDIUM",
            "questionType": "MCQ",
            "question": "Which TypeScript feature allows you to define a type that can be one of several types?",
            "options": [
                "Intersection types",
                "Union types",
                "Generic types",
                "Mapped types"
            ],
            "correctAnswer": [
                "Union types"
            ],
            "explanation": "Union types allow a value to be one of several types, e.g., `type Status = 'loading' | 'success' | 'error';`."
        },
        {
            "questionId": "FSE011",
            "topic": "TypeScript",
            "subTopic": "Utility Types",
            "experienceLevel": [
                "MID"
            ],
            "difficulty": "MEDIUM",
            "questionType": "MCQ",
            "question": "Which TypeScript utility type makes all properties of a type optional?",
            "options": [
                "Partial<T>",
                "Required<T>",
                "Optional<T>",
                "Nullable<T>"
            ],
            "correctAnswer": [
                "Partial<T>"
            ],
            "explanation": "Partial<T> constructs a type with all properties of T set to optional."
        },
        {
            "questionId": "FSE012",
            "topic": "TypeScript",
            "subTopic": "Advanced Types",
            "experienceLevel": [
                "SENIOR"
            ],
            "difficulty": "HARD",
            "questionType": "MCQ",
            "question": "What is the purpose of the `infer` keyword in TypeScript?",
            "options": [
                "To infer types automatically",
                "To introduce a type variable within conditional types",
                "To create intersection types",
                "To make properties optional"
            ],
            "correctAnswer": [
                "To introduce a type variable within conditional types"
            ],
            "explanation": "The infer keyword is used in conditional types to deduce a type from a part of another type, often used for extracting return types or parameter types."
        },
        {
            "questionId": "FSE013",
            "topic": "Front-End",
            "subTopic": "Accessibility",
            "experienceLevel": [
                "JUNIOR"
            ],
            "difficulty": "EASY",
            "questionType": "MCQ",
            "question": "When might an empty `alt` attribute be the correct value for an image?",
            "options": [
                "when you cannot think of useful alt text",
                "when you don't think it would be interesting",
                "when the image has come from a CMS",
                "when the image is purely decorative"
            ],
            "correctAnswer": [
                "when the image is purely decorative"
            ],
            "explanation": "If an image is purely decorative and conveys no information, an empty alt attribute (alt=\"\") ensures screen readers ignore it."
        },
        {
            "questionId": "FSE014",
            "topic": "Front-End",
            "subTopic": "CSS Flexbox",
            "experienceLevel": [
                "JUNIOR"
            ],
            "difficulty": "EASY",
            "questionType": "MCQ",
            "question": "Which description correctly describes the initial values of flex items if you have applied `display: flex` to their parent?",
            "options": [
                "Items display in a row, lined up at the start, and do not stretch to fill the container",
                "Items display in a column, lined up at the start, and do not stretch",
                "Items stay in a column until you add flex properties",
                "Items display in a row, lined up at the start and stretched to fill the container"
            ],
            "correctAnswer": [
                "Items display in a row, lined up at the start, and do not stretch to fill the container"
            ],
            "explanation": "By default, flex items are laid out in a row (flex-direction: row), start from the flex-start edge, and do not stretch."
        },
        {
            "questionId": "FSE015",
            "topic": "Front-End",
            "subTopic": "CSS Logical Properties",
            "experienceLevel": [
                "MID"
            ],
            "difficulty": "MEDIUM",
            "questionType": "MCQ",
            "question": "CSS Logical Properties now have wide-ranging support. If you wanted to use the logical version of `width`, which property name would you choose?",
            "options": [
                "block-width",
                "inline-size",
                "inline-width",
                "block-size"
            ],
            "correctAnswer": [
                "inline-size"
            ],
            "explanation": "In CSS logical properties, the inline dimension corresponds to the text flow (usually horizontal width), so inline-size is the logical equivalent of width."
        },
        {
            "questionId": "FSE016",
            "topic": "Front-End",
            "subTopic": "HTML Semantics",
            "experienceLevel": [
                "MID"
            ],
            "difficulty": "MEDIUM",
            "questionType": "FILL_IN_THE_BLANK",
            "question": "The HTML ______ element should be used to indicate the main navigation of a website.",
            "options": [],
            "correctAnswer": [
                "nav",
                "<nav>"
            ],
            "explanation": "The <nav> element represents a section of a page that contains navigation links."
        },
        {
            "questionId": "FSE017",
            "topic": "Front-End",
            "subTopic": "CSS Images",
            "experienceLevel": [
                "SENIOR"
            ],
            "difficulty": "HARD",
            "questionType": "MCQ",
            "question": "You have a set of images that are slightly different sizes and aspect ratios. You want each image to completely fill a square box without being distorted. Which property and value would achieve this?",
            "options": [
                "object-fit: contain",
                "object-fit: stretch",
                "object-fit: all",
                "object-fit: cover"
            ],
            "correctAnswer": [
                "object-fit: cover"
            ],
            "explanation": "object-fit: cover scales the image to fill the container while maintaining its aspect ratio, cropping any excess."
        },
        {
            "questionId": "FSE018",
            "topic": "MongoDB",
            "subTopic": "Basics",
            "experienceLevel": [
                "JUNIOR"
            ],
            "difficulty": "EASY",
            "questionType": "MCQ",
            "question": "What does a MongoDB collection consist of?",
            "options": [
                "data",
                "documents",
                "fields",
                "rows"
            ],
            "correctAnswer": [
                "documents"
            ],
            "explanation": "In MongoDB, a collection is a grouping of MongoDB documents. A document is a record in a MongoDB collection."
        },
        {
            "questionId": "FSE019",
            "topic": "MongoDB",
            "subTopic": "Configuration",
            "experienceLevel": [
                "JUNIOR"
            ],
            "difficulty": "EASY",
            "questionType": "FILL_IN_THE_BLANK",
            "question": "The default port number for a MongoDB server is ______.",
            "options": [],
            "correctAnswer": [
                "27017"
            ],
            "explanation": "MongoDB listens on port 27017 by default."
        },
        {
            "questionId": "FSE020",
            "topic": "MongoDB",
            "subTopic": "Queries",
            "experienceLevel": [
                "MID"
            ],
            "difficulty": "MEDIUM",
            "questionType": "MCQ",
            "question": "To restrict the number of records coming back from a query, which command should you use?",
            "options": [
                "take",
                "limit",
                "max",
                "skip"
            ],
            "correctAnswer": [
                "limit"
            ],
            "explanation": "The limit() method restricts the number of documents returned by a query."
        },
        {
            "questionId": "FSE021",
            "topic": "MongoDB",
            "subTopic": "Aggregation",
            "experienceLevel": [
                "MID"
            ],
            "difficulty": "MEDIUM",
            "questionType": "MCQ",
            "question": "Which aggregation stage in MongoDB is used to group documents by a specified expression and apply an accumulator expression to each group?",
            "options": [
                "$group",
                "$match",
                "$project",
                "$sort"
            ],
            "correctAnswer": [
                "$group"
            ],
            "explanation": "The $group stage separates documents into groups according to a group key, and then applies accumulator expressions to each group."
        },
        {
            "questionId": "FSE022",
            "topic": "MongoDB",
            "subTopic": "Replication",
            "experienceLevel": [
                "MID"
            ],
            "difficulty": "MEDIUM",
            "questionType": "MCQ",
            "question": "If the primary database in a replica set fails, when does failover begin?",
            "options": [
                "once the primary has been down for 10 minutes",
                "once the primary reboots",
                "immediately",
                "after the administrator reboots the primary"
            ],
            "correctAnswer": [
                "immediately"
            ],
            "explanation": "MongoDB replica sets are designed for high availability. If the primary fails, secondaries immediately hold an election to promote a new primary."
        },
        {
            "questionId": "FSE023",
            "topic": "MongoDB",
            "subTopic": "Indexing",
            "experienceLevel": [
                "SENIOR"
            ],
            "difficulty": "HARD",
            "questionType": "MCQ",
            "question": "You have a collection named `restaurants` with geographical information stored in the `location` property. How do you create a geospatial index on it?",
            "options": [
                "db.restaurants.createIndex({location: \"2dsphere\"})",
                "db.restaurants.geospatial({location: \"2dsphere\"})",
                "db.restaurants.createIndex(\"2dsphere\":\"location\")",
                "db.restaurants.createIndex({geospatial: \"location\"})"
            ],
            "correctAnswer": [
                "db.restaurants.createIndex({location: \"2dsphere\"})"
            ],
            "explanation": "To support geospatial queries on GeoJSON data, you must create a 2dsphere index."
        },
        {
            "questionId": "FSE024",
            "topic": "MongoDB",
            "subTopic": "Query Operators",
            "experienceLevel": [
                "SENIOR"
            ],
            "difficulty": "HARD",
            "questionType": "FILL_IN_THE_BLANK",
            "question": "The ______ operator is used for equality in MongoDB queries.",
            "options": [],
            "correctAnswer": [
                "$eq"
            ],
            "explanation": "The $eq operator matches documents where the value of a field equals the specified value."
        },
        {
            "questionId": "FSE025",
            "topic": "REST API",
            "subTopic": "HTTP Methods",
            "experienceLevel": [
                "JUNIOR"
            ],
            "difficulty": "EASY",
            "questionType": "MCQ",
            "question": "Which HTTP verb is normally used to retrieve or read a resource in an API?",
            "options": [
                "RETRIEVE",
                "FORM",
                "GET",
                "READ"
            ],
            "correctAnswer": [
                "GET"
            ],
            "explanation": "The GET method requests a representation of the specified resource. Requests using GET should only retrieve data."
        },
        {
            "questionId": "FSE026",
            "topic": "REST API",
            "subTopic": "Status Codes",
            "experienceLevel": [
                "MID"
            ],
            "difficulty": "MEDIUM",
            "questionType": "MCQ",
            "question": "To create a new resource successfully, what HTTP response code should you receive?",
            "options": [
                "200",
                "405",
                "201",
                "204"
            ],
            "correctAnswer": [
                "201"
            ],
            "explanation": "The 201 Created success status code indicates that the request has succeeded and has led to the creation of a resource."
        },
        {
            "questionId": "FSE027",
            "topic": "REST API",
            "subTopic": "Security & CORS",
            "experienceLevel": [
                "MID"
            ],
            "difficulty": "MEDIUM",
            "questionType": "MCQ",
            "question": "What would you enable to allow a browser on another site to make an AJAX request to your API?",
            "options": [
                "HTTP",
                "REST",
                "OPTIONS",
                "CORS"
            ],
            "correctAnswer": [
                "CORS"
            ],
            "explanation": "Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins other than its own."
        },
        {
            "questionId": "FSE028",
            "topic": "REST API",
            "subTopic": "Architecture",
            "experienceLevel": [
                "SENIOR"
            ],
            "difficulty": "HARD",
            "questionType": "MCQ",
            "question": "The ability to execute the same API request over and over again without changing the resource's state is an example of _.",
            "options": [
                "stateless architecture",
                "idempotency",
                "a uniform interface",
                "cacheability"
            ],
            "correctAnswer": [
                "idempotency"
            ],
            "explanation": "Idempotency means making the same request multiple times has the same effect as making it once, particularly for PUT and DELETE methods."
        },
        {
            "questionId": "FSE029",
            "topic": "REST API",
            "subTopic": "OAuth",
            "experienceLevel": [
                "SENIOR"
            ],
            "difficulty": "HARD",
            "questionType": "FILL_IN_THE_BLANK",
            "question": "In OAuth, the term ______ is used to represent permissions or the scope of access granted to a token.",
            "options": [],
            "correctAnswer": [
                "scope"
            ],
            "explanation": "Scopes define the specific permissions or access levels an application is requesting from the authorization server."
        },
        {
            "questionId": "FSE030",
            "topic": "JavaScript",
            "subTopic": "Arrow Functions & 'this'",
            "experienceLevel": [
                "SENIOR"
            ],
            "difficulty": "HARD",
            "questionType": "MCQ",
            "question": "What will this code output?\n`const obj = { name: 'John', greet: () => { return this.name; } };`\n`console.log(obj.greet());`",
            "options": [
                "'John'",
                "undefined",
                "'greet'",
                "Error"
            ],
            "correctAnswer": [
                "undefined"
            ],
            "explanation": "Arrow functions do not have their own 'this' binding. They inherit 'this' from the enclosing lexical scope (the global object or undefined in strict mode), not the object they are called on."
        }
    ]
},
{
    "jobRole": "Software Developer",
    "assessmentTitle": "Software Developer Technical Assessment",
    "experienceLevels": [
        "JUNIOR",
        "MID",
        "SENIOR"
    ],
    "assessmentConfig": {
        "totalQuestions": 30,
        "totalTimeMins": 45,
        "difficultyDistribution": {
            "JUNIOR": {
                "EASY": 50,
                "MEDIUM": 30,
                "HARD": 20
            },
            "MID": {
                "EASY": 20,
                "MEDIUM": 50,
                "HARD": 30
            },
            "SENIOR": {
                "EASY": 10,
                "MEDIUM": 30,
                "HARD": 60
            }
        },
        "questionTypeDistribution": {
            "MCQ": 80,
            "FILL_IN_THE_BLANK": 20
        }
    },
    "questionBank": [
        {
            "questionId": "SD001",
            "topic": "DSA",
            "subTopic": "Hashing",
            "experienceLevel": [
                "JUNIOR"
            ],
            "difficulty": "EASY",
            "questionType": "MCQ",
            "question": "Which data structure is optimally used to find if a specific element exists in an array in O(1) average time complexity?",
            "options": [
                "Linked List",
                "Hash Table",
                "Binary Search Tree",
                "Stack"
            ],
            "correctAnswer": [
                "Hash Table"
            ],
            "explanation": "A Hash Table uses a hash function to map keys to indices, allowing for O(1) average time complexity for lookups, insertions, and deletions."
        },
        {
            "questionId": "SD002",
            "topic": "DSA",
            "subTopic": "Linked List",
            "experienceLevel": [
                "JUNIOR"
            ],
            "difficulty": "EASY",
            "questionType": "MCQ",
            "question": "What is the most efficient algorithmic approach to detect a cycle in a singly linked list?",
            "options": [
                "Using a Stack",
                "Floyd's Cycle-Finding (Fast and Slow Pointers)",
                "Binary Search",
                "Merge Sort"
            ],
            "correctAnswer": [
                "Floyd's Cycle-Finding (Fast and Slow Pointers)"
            ],
            "explanation": "Floyd's algorithm uses two pointers moving at different speeds. If there is a cycle, the fast pointer will eventually meet the slow pointer inside the loop."
        },
        {
            "questionId": "SD003",
            "topic": "DSA",
            "subTopic": "Stack",
            "experienceLevel": [
                "JUNIOR"
            ],
            "difficulty": "EASY",
            "questionType": "MCQ",
            "question": "Which data structure is best suited for checking if a string of brackets (e.g., '({[]})') is properly balanced?",
            "options": [
                "Queue",
                "Stack",
                "Tree",
                "Graph"
            ],
            "correctAnswer": [
                "Stack"
            ],
            "explanation": "A Stack follows the Last-In-First-Out (LIFO) principle, making it perfect for matching the most recently opened bracket with the current closing bracket."
        },
        {
            "questionId": "SD004",
            "topic": "DSA",
            "subTopic": "Trees",
            "experienceLevel": [
                "JUNIOR",
                "MID"
            ],
            "difficulty": "MEDIUM",
            "questionType": "MCQ",
            "question": "Which tree traversal algorithm is typically used to find the shortest path in an unweighted graph or tree?",
            "options": [
                "Depth-First Search (DFS)",
                "Breadth-First Search (BFS)",
                "Post-order Traversal",
                "In-order Traversal"
            ],
            "correctAnswer": [
                "Breadth-First Search (BFS)"
            ],
            "explanation": "BFS explores all neighbor nodes at the present depth prior to moving on to the nodes at the next depth level, guaranteeing the shortest path in unweighted graphs."
        },
        {
            "questionId": "SD005",
            "topic": "DSA",
            "subTopic": "Sorting",
            "experienceLevel": [
                "MID"
            ],
            "difficulty": "MEDIUM",
            "questionType": "MCQ",
            "question": "What is the worst-case time complexity of QuickSort, and what causes it?",
            "options": [
                "O(n log n) due to recursive calls",
                "O(n^2) when the pivot selection is poor (e.g., already sorted array)",
                "O(n) because it uses partitioning",
                "O(log n) due to divide and conquer"
            ],
            "correctAnswer": [
                "O(n^2) when the pivot selection is poor (e.g., already sorted array)"
            ],
            "explanation": "QuickSort degrades to O(n^2) if the pivot consistently divides the array into highly unbalanced partitions, such as when the array is already sorted and the last element is chosen as the pivot."
        },
        {
            "questionId": "SD006",
            "topic": "DSA",
            "subTopic": "Hashing",
            "experienceLevel": [
                "MID"
            ],
            "difficulty": "MEDIUM",
            "questionType": "MCQ",
            "question": "When two different keys hash to the same index in a Hash Table, this is called a collision. Which technique resolves this by finding another empty slot within the same array?",
            "options": [
                "Separate Chaining",
                "Open Addressing (Linear Probing)",
                "Balancing",
                "Rehashing to a new table"
            ],
            "correctAnswer": [
                "Open Addressing (Linear Probing)"
            ],
            "explanation": "Open Addressing resolves collisions by probing (searching) for the next available empty slot within the same underlying array, whereas Chaining uses linked lists."
        },
        {
            "questionId": "SD007",
            "topic": "DSA",
            "subTopic": "Dynamic Programming",
            "experienceLevel": [
                "MID",
                "SENIOR"
            ],
            "difficulty": "MEDIUM",
            "questionType": "MCQ",
            "question": "What are the two main conditions required to apply Dynamic Programming to a problem?",
            "options": [
                "Sorting and Searching",
                "Overlapping Subproblems and Optimal Substructure",
                "Divide and Conquer",
                "Greedy Choice Property"
            ],
            "correctAnswer": [
                "Overlapping Subproblems and Optimal Substructure"
            ],
            "explanation": "Dynamic Programming is used when a problem can be broken down into overlapping subproblems (solved once and memoized) and has an optimal substructure (optimal solution contains optimal solutions to subproblems)."
        },
        {
            "questionId": "SD008",
            "topic": "DSA",
            "subTopic": "Trees",
            "experienceLevel": [
                "SENIOR"
            ],
            "difficulty": "HARD",
            "questionType": "MCQ",
            "question": "Why do we use self-balancing Binary Search Trees (like AVL or Red-Black Trees) instead of standard BSTs?",
            "options": [
                "To reduce space complexity to O(1)",
                "To guarantee O(log n) time complexity for search, insert, and delete by preventing the tree from becoming a skewed linked list",
                "To allow duplicate keys in the tree",
                "To simplify the implementation of the tree"
            ],
            "correctAnswer": [
                "To guarantee O(log n) time complexity for search, insert, and delete by preventing the tree from becoming a skewed linked list"
            ],
            "explanation": "A standard BST can degrade to O(n) if inserted with sorted data. Self-balancing trees perform rotations to maintain a height of O(log n), ensuring consistent performance."
        },
        {
            "questionId": "SD009",
            "topic": "DSA",
            "subTopic": "Graphs",
            "experienceLevel": [
                "SENIOR"
            ],
            "difficulty": "HARD",
            "questionType": "MCQ",
            "question": "Which shortest-path algorithm must be used if a graph contains edges with negative weights?",
            "options": [
                "Dijkstra's Algorithm",
                "Bellman-Ford Algorithm",
                "Prim's Algorithm",
                "Kruskal's Algorithm"
            ],
            "correctAnswer": [
                "Bellman-Ford Algorithm"
            ],
            "explanation": "Dijkstra's algorithm fails with negative edge weights because it assumes paths can only get longer. Bellman-Ford relaxes all edges V-1 times, correctly handling negative weights (and detecting negative cycles)."
        },
        {
            "questionId": "SD010",
            "topic": "DSA",
            "subTopic": "Complexity",
            "experienceLevel": [
                "JUNIOR",
                "MID"
            ],
            "difficulty": "EASY",
            "questionType": "FILL_IN_THE_BLANK",
            "question": "The time complexity of accessing an element in an array by its index is O(___).",
            "options": [],
            "correctAnswer": [
                "1",
                "O(1)"
            ],
            "explanation": "Arrays are stored in contiguous memory locations. Using the base address and index, the exact memory address can be calculated in constant time, O(1)."
        },
        {
            "questionId": "SD011",
            "topic": "OOP",
            "subTopic": "Encapsulation",
            "experienceLevel": [
                "JUNIOR"
            ],
            "difficulty": "EASY",
            "questionType": "MCQ",
            "question": "What is encapsulation in Object-Oriented Programming?",
            "options": [
                "Defining classes by focusing on what is important for a purpose",
                "Hiding the data and implementation details within a class",
                "Making all methods private",
                "Using words to define classes"
            ],
            "correctAnswer": [
                "Hiding the data and implementation details within a class"
            ],
            "explanation": "Encapsulation bundles the data (attributes) and methods that operate on the data into a single unit (class), and restricts direct access to some of the object's components."
        },
        {
            "questionId": "SD012",
            "topic": "OOP",
            "subTopic": "Inheritance",
            "experienceLevel": [
                "JUNIOR"
            ],
            "difficulty": "EASY",
            "questionType": "MCQ",
            "question": "What does an 'IS-A' relationship imply in OOP?",
            "options": [
                "It implies encapsulation.",
                "A superclass object has an IS-A relationship with its subclass.",
                "It implies a virtual method.",
                "A subclass object has an IS-A relationship with its superclass or interface."
            ],
            "correctAnswer": [
                "A subclass object has an IS-A relationship with its superclass or interface."
            ],
            "explanation": "Inheritance establishes an IS-A relationship. For example, a 'Car' IS-A 'Vehicle'. The subclass inherits the properties and behaviors of the superclass."
        },
        {
            "questionId": "SD013",
            "topic": "OOP",
            "subTopic": "Polymorphism",
            "experienceLevel": [
                "JUNIOR"
            ],
            "difficulty": "EASY",
            "questionType": "MCQ",
            "question": "What is an example of dynamic binding (runtime polymorphism)?",
            "options": [
                "any method",
                "method overloading",
                "method overriding",
                "compiling"
            ],
            "correctAnswer": [
                "method overriding"
            ],
            "explanation": "Dynamic binding occurs at runtime. Method overriding (where a subclass provides a specific implementation of a method already defined in its superclass) is resolved at runtime based on the actual object type."
        },
        {
            "questionId": "SD014",
            "topic": "OOP",
            "subTopic": "Abstraction",
            "experienceLevel": [
                "MID"
            ],
            "difficulty": "MEDIUM",
            "questionType": "MCQ",
            "question": "What is the primary difference between an abstract class and an interface?",
            "options": [
                "Interfaces can contain code or data. Abstract classes do not.",
                "Abstract classes can contain code or data. Interfaces traditionally do not contain code. A class can inherit from only one abstract class but can implement multiple interfaces.",
                "Abstract classes do not have constructors.",
                "There is no difference."
            ],
            "correctAnswer": [
                "Abstract classes can contain code or data. Interfaces traditionally do not contain code. A class can inherit from only one abstract class but can implement multiple interfaces."
            ],
            "explanation": "While modern languages blur this line, traditionally, abstract classes hold state and partial implementations (single inheritance), whereas interfaces define contracts (methods without bodies) that a class can implement multiple of."
        },
        {
            "questionId": "SD015",
            "topic": "OOP",
            "subTopic": "SOLID Principles",
            "experienceLevel": [
                "MID",
                "SENIOR"
            ],
            "difficulty": "MEDIUM",
            "questionType": "MCQ",
            "question": "The open/closed principle states that classes should be open for _ but closed for _.",
            "options": [
                "refactoring; duplication",
                "modification; duplication",
                "extension; modification",
                "reuse; encapsulation"
            ],
            "correctAnswer": [
                "extension; modification"
            ],
            "explanation": "The Open/Closed Principle (the 'O' in SOLID) dictates that software entities should be open for extension (adding new behavior) but closed for modification (changing existing code)."
        },
        {
            "questionId": "SD016",
            "topic": "OOP",
            "subTopic": "Composition",
            "experienceLevel": [
                "MID"
            ],
            "difficulty": "MEDIUM",
            "questionType": "MCQ",
            "question": "In the context of OOP, what is composition?",
            "options": [
                "Passing an operation to another object",
                "A part/whole relationship where an object is composed of one or more other objects, and if the whole dies, the parts die.",
                "Binding class/name association at execution time",
                "Collecting classes for a domain"
            ],
            "correctAnswer": [
                "A part/whole relationship where an object is composed of one or more other objects, and if the whole dies, the parts die."
            ],
            "explanation": "Composition is a strong 'HAS-A' relationship. The lifecycle of the contained objects is strictly managed by the parent object (e.g., a House and its Rooms)."
        },
        {
            "questionId": "SD017",
            "topic": "OOP",
            "subTopic": "Design Patterns",
            "experienceLevel": [
                "SENIOR"
            ],
            "difficulty": "HARD",
            "questionType": "MCQ",
            "question": "Which of the following are the five Creational Design patterns defined by the Gang of Four?",
            "options": [
                "Observer, State, Strategy, Template Method, and Visitor.",
                "Composite, Visitor, State, Prototype, and Singleton.",
                "Composite, Builder, Factory Method, Prototype, and Singleton.",
                "Abstract Factory, Builder, Factory Method, Prototype, and Singleton."
            ],
            "correctAnswer": [
                "Abstract Factory, Builder, Factory Method, Prototype, and Singleton."
            ],
            "explanation": "The GoF Creational patterns focus on object creation mechanisms. Abstract Factory, Builder, Factory Method, Prototype, and Singleton are the exact five creational patterns."
        },
        {
            "questionId": "SD018",
            "topic": "DBMS",
            "subTopic": "SQL Basics",
            "experienceLevel": [
                "JUNIOR"
            ],
            "difficulty": "EASY",
            "questionType": "MCQ",
            "question": "What is the difference between DROP and TRUNCATE in SQL?",
            "options": [
                "They both delete the table completely.",
                "They both clear the table but keep its definition.",
                "TRUNCATE deletes the table completely. DROP clears the table.",
                "DROP deletes the table completely, removing its definition. TRUNCATE clears the table but does not delete the definition."
            ],
            "correctAnswer": [
                "DROP deletes the table completely, removing its definition. TRUNCATE clears the table but does not delete the definition."
            ],
            "explanation": "DROP removes the entire table structure and its data from the database. TRUNCATE removes all rows from a table but leaves the table structure (columns, constraints, indexes) intact."
        },
        {
            "questionId": "SD019",
            "topic": "DBMS",
            "subTopic": "NoSQL Basics",
            "experienceLevel": [
                "JUNIOR"
            ],
            "difficulty": "EASY",
            "questionType": "MCQ",
            "question": "What does a MongoDB collection consist of?",
            "options": [
                "data",
                "documents",
                "fields",
                "rows"
            ],
            "correctAnswer": [
                "documents"
            ],
            "explanation": "In MongoDB, a collection is a grouping of MongoDB documents. A document is a record in a MongoDB collection, essentially equivalent to a row in a relational database."
        },
        {
            "questionId": "SD020",
            "topic": "DBMS",
            "subTopic": "Relational Keys",
            "experienceLevel": [
                "MID"
            ],
            "difficulty": "MEDIUM",
            "questionType": "MCQ",
            "question": "In a one-to-many database structure (e.g., an Employee table and an Employment History table), what is the EmployeeID in the Employment History table an example of?",
            "options": [
                "primary key",
                "secondary key",
                "foreign key",
                "alternate key"
            ],
            "correctAnswer": [
                "foreign key"
            ],
            "explanation": "A foreign key is a field in one table that uniquely identifies a row of another table (or the same table). It establishes the link between the two tables."
        },
        {
            "questionId": "SD021",
            "topic": "DBMS",
            "subTopic": "NoSQL Architecture",
            "experienceLevel": [
                "MID",
                "SENIOR"
            ],
            "difficulty": "MEDIUM",
            "questionType": "MCQ",
            "question": "In a MongoDB Replica Set, if the primary database fails, when does failover begin?",
            "options": [
                "once the primary has been down for 10 minutes",
                "once the primary reboots",
                "immediately",
                "after the administrator reboots the primary"
            ],
            "correctAnswer": [
                "immediately"
            ],
            "explanation": "MongoDB replica sets are designed for high availability. If the primary node fails, the secondary nodes will immediately hold an election to promote a new primary."
        },
        {
            "questionId": "SD022",
            "topic": "DBMS",
            "subTopic": "SQL Joins",
            "experienceLevel": [
                "MID"
            ],
            "difficulty": "MEDIUM",
            "questionType": "MCQ",
            "question": "The left and right joins are also known as what type of join?",
            "options": [
                "Inner Join",
                "Natural Join",
                "Outer Join",
                "Cartesian Join"
            ],
            "correctAnswer": [
                "Outer Join"
            ],
            "explanation": "LEFT JOIN and RIGHT JOIN are types of Outer Joins. They return all records from one table and the matched records from the other table, filling in NULLs where there is no match."
        },
        {
            "questionId": "SD023",
            "topic": "DBMS",
            "subTopic": "Transactions",
            "experienceLevel": [
                "SENIOR"
            ],
            "difficulty": "HARD",
            "questionType": "MCQ",
            "question": "Inside a database transaction, several operations need to be performed. What would you do if an exception happens during that transaction to ensure data integrity?",
            "options": [
                "UNDO",
                "UNCOMMIT",
                "ROLLBACK",
                "REVERSE"
            ],
            "correctAnswer": [
                "ROLLBACK"
            ],
            "explanation": "If an error occurs during a transaction, a ROLLBACK command is issued to undo all changes made by the transaction since it began, maintaining the ACID properties of the database."
        },
        {
            "questionId": "SD024",
            "topic": "Version Control",
            "subTopic": "Git Basics",
            "experienceLevel": [
                "JUNIOR"
            ],
            "difficulty": "EASY",
            "questionType": "MCQ",
            "question": "How can you create a new branch and switch to it immediately in Git?",
            "options": [
                "git branch <branch-name>",
                "git switch <branch-name>",
                "git checkout -b <branch-name>",
                "git merge <branch-name>"
            ],
            "correctAnswer": [
                "git checkout -b <branch-name>"
            ],
            "explanation": "The `-b` flag tells Git to create a new branch. Combined with `checkout` (or `switch -c` in newer Git versions), it creates the branch and immediately moves your working directory to it."
        },
        {
            "questionId": "SD025",
            "topic": "Version Control",
            "subTopic": "Git Concepts",
            "experienceLevel": [
                "JUNIOR"
            ],
            "difficulty": "EASY",
            "questionType": "MCQ",
            "question": "What is the staging area (or index) in Git?",
            "options": [
                "an area that stores commits prior to them being pushed",
                "an area containing stash entries",
                "an area where changes from a remote repo are stored",
                "an area that stores information about changes that will be included in the next commit"
            ],
            "correctAnswer": [
                "an area that stores information about changes that will be included in the next commit"
            ],
            "explanation": "The staging area is a file contained in the Git directory that stores information about what will go into the next commit. It is the middle step between modifying files and committing them."
        },
        {
            "questionId": "SD026",
            "topic": "Version Control",
            "subTopic": "Git Workflows",
            "experienceLevel": [
                "MID",
                "SENIOR"
            ],
            "difficulty": "MEDIUM",
            "questionType": "MCQ",
            "question": "What is the main issue with using `git rebase` when working with multiple developers on a shared branch?",
            "options": [
                "Rebase affects only your repository and creates a diff in the master branch.",
                "Rebase creates a temporary copy of the master branch.",
                "Rebase moves the HEAD of the remote master branch.",
                "Rebase rewrites commit history, which can cause severe conflicts for other developers who have already pulled the original commits."
            ],
            "correctAnswer": [
                "Rebase rewrites commit history, which can cause severe conflicts for other developers who have already pulled the original commits."
            ],
            "explanation": "Rebase rewrites the project history by creating new commits. If done on a public/shared branch, it will desynchronize your local history from the remote, causing massive merge conflicts for the team."
        },
        {
            "questionId": "SD027",
            "topic": "Version Control",
            "subTopic": "Git Debugging",
            "experienceLevel": [
                "SENIOR"
            ],
            "difficulty": "HARD",
            "questionType": "MCQ",
            "question": "You find a bug in your project, but can't locate where it was introduced in the commit history. How would you diagnose this problem efficiently?",
            "options": [
                "Manually backtrack through your commit history.",
                "Use git search -diff.",
                "Run a git rebase.",
                "Use git bisect to compare the buggy commit to an early commit that works as expected."
            ],
            "correctAnswer": [
                "Use git bisect to compare the buggy commit to an early commit that works as expected."
            ],
            "explanation": "`git bisect` performs a binary search through the commit history. You mark a good commit and a bad commit, and Git automatically checks out the middle commit for you to test, rapidly isolating the exact commit that introduced the bug."
        },
        {
            "questionId": "SD028",
            "topic": "System Concepts",
            "subTopic": "Memory Management",
            "experienceLevel": [
                "MID"
            ],
            "difficulty": "MEDIUM",
            "questionType": "MCQ",
            "question": "In general software development, what is the primary difference between Stack and Heap memory?",
            "options": [
                "Stack is used for dynamic memory allocation, Heap is for static.",
                "Stack memory is allocated in blocks, Heap memory is stored in a continuous memory block.",
                "Stack is used for static memory allocation (local variables) and is fast but limited; Heap is used for dynamic memory allocation (objects) and is larger but slower.",
                "There is no difference, they are just different names for the same memory space."
            ],
            "correctAnswer": [
                "Stack is used for static memory allocation (local variables) and is fast but limited; Heap is used for dynamic memory allocation (objects) and is larger but slower."
            ],
            "explanation": "The Stack is used for static memory allocation (like local variables and function calls) and is highly structured and fast. The Heap is used for dynamic memory allocation (like objects created at runtime) and requires manual or garbage-collected management."
        },
        {
            "questionId": "SD029",
            "topic": "System Concepts",
            "subTopic": "Concurrency",
            "experienceLevel": [
                "MID",
                "SENIOR"
            ],
            "difficulty": "MEDIUM",
            "questionType": "MCQ",
            "question": "What is a race condition in software development?",
            "options": [
                "A condition where the program runs faster than expected",
                "A condition where multiple threads access shared data concurrently, and the outcome depends on the timing of their execution",
                "A condition where two threads compete for CPU time",
                "A condition where a loop executes too quickly"
            ],
            "correctAnswer": [
                "A condition where multiple threads access shared data concurrently, and the outcome depends on the timing of their execution"
            ],
            "explanation": "A race condition occurs when two or more threads can access shared data and they try to change it at the same time. Because the thread scheduling algorithm can swap between threads at any time, the final result is unpredictable."
        },
        {
            "questionId": "SD030",
            "topic": "System Concepts",
            "subTopic": "Resource Management",
            "experienceLevel": [
                "SENIOR"
            ],
            "difficulty": "HARD",
            "questionType": "MCQ",
            "question": "What does the acronym RAII stand for in the context of system architecture and resource management?",
            "options": [
                "Random Access Iterator Interface",
                "Resource Acquisition Is Initialization",
                "Recursive Algorithm Implementation Interface",
                "Runtime Allocation and Initialization"
            ],
            "correctAnswer": [
                "Resource Acquisition Is Initialization"
            ],
            "explanation": "RAII is a programming idiom where resource acquisition (like opening a file or allocating memory) is tied to object lifetime (initialization). When the object goes out of scope, its destructor automatically releases the resource, preventing memory/resource leaks."
        }
    ]
}
];
