window.BUNDLED_QUESTIONS = [
  {
    "title": "Kadane's Algorithm / Maximum Subarray",
    "slug": "kadane-s-algorithm-maximum-subarray",
    "difficulty": "Medium",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Arrays",
    "subtopic": "Kadane's Algorithm",
    "estimatedTimeMins": 30,
    "expectedComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "description": "At {{companyName}}, the {{department}} team logs net daily operational metrics in an array nums. Positive numbers represent net operational gains (such as latency improvements or cost savings), while negative numbers represent regressions. As a {{roleTitle}} working in {{domain}}, the team wants you to identify the single best consecutive run of days with the highest combined net score to analyze peak system performance across {{location}}.\n\nReturn the largest total net change achievable over any contiguous run of days.",
    "functionName": "maxSubArray",
    "parameters": [
      {
        "name": "nums",
        "type": "int[]"
      }
    ],
    "returnType": "int",
    "constraints": [
      "1 <= nums.length <= 100000",
      "-10000 <= nums[i] <= 10000"
    ],
    "testCases": [
      {
        "input": {
          "nums": [
            -2,
            1,
            -3,
            4,
            -1,
            2,
            1,
            -5,
            4
          ]
        },
        "expectedOutput": 6,
        "isHidden": false
      },
      {
        "input": {
          "nums": [
            1
          ]
        },
        "expectedOutput": 1,
        "isHidden": false
      },
      {
        "input": {
          "nums": [
            -3,
            -1,
            -2
          ]
        },
        "expectedOutput": -1,
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            5,
            4,
            -1,
            7,
            8
          ]
        },
        "expectedOutput": 23,
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            -2,
            -1
          ]
        },
        "expectedOutput": -1,
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            0,
            -1,
            0,
            -2,
            0
          ]
        },
        "expectedOutput": 0,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} nums\n * @return {number}\n */\nfunction maxSubArray(nums) {\n    // Write your solution here\n}",
      "python": "def maxSubArray(nums: list[int]) -> int:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        "output": "6",
        "expectedOutput": "6",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "nums = [1]",
        "output": "1",
        "expectedOutput": "1",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Majority Element",
    "slug": "majority-element",
    "difficulty": "Medium",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Arrays",
    "subtopic": "Majority Element",
    "estimatedTimeMins": 30,
    "expectedComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "description": "At {{companyName}}, the {{department}} team processes high-throughput distributed event streams where each event carries an originating service ID in the array nums. Under peak load, one core service dominates traffic, appearing strictly more than n / 2 times (where n is the length of nums). As a {{roleTitle}} in {{domain}}, your task is to identify this dominant service ID.\n\nYou may assume that the majority element always exists in the array.",
    "functionName": "majorityElement",
    "parameters": [
      {
        "name": "nums",
        "type": "int[]"
      }
    ],
    "returnType": "int",
    "constraints": [
      "1 <= nums.length <= 50000",
      "-1000000000 <= nums[i] <= 1000000000",
      "A majority element always exists"
    ],
    "testCases": [
      {
        "input": {
          "nums": [
            3,
            2,
            3
          ]
        },
        "expectedOutput": 3,
        "isHidden": false
      },
      {
        "input": {
          "nums": [
            2,
            2,
            1,
            1,
            1,
            2,
            2
          ]
        },
        "expectedOutput": 2,
        "isHidden": false
      },
      {
        "input": {
          "nums": [
            7
          ]
        },
        "expectedOutput": 7,
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            1,
            1,
            1,
            2,
            3
          ]
        },
        "expectedOutput": 1,
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            -1,
            -1,
            5,
            -1,
            5,
            -1,
            5
          ]
        },
        "expectedOutput": -1,
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            4,
            4,
            4,
            4
          ]
        },
        "expectedOutput": 4,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} nums\n * @return {number}\n */\nfunction majorityElement(nums) {\n    // Write your solution here\n}",
      "python": "def majorityElement(nums: list[int]) -> int:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "nums = [3,2,3]",
        "output": "3",
        "expectedOutput": "3",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "nums = [2,2,1,1,1,2,2]",
        "output": "2",
        "expectedOutput": "2",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Best Time to Buy and Sell Stock",
    "slug": "best-time-to-buy-and-sell-stock",
    "difficulty": "Medium",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Dynamic Programming",
    "subtopic": "Stock Trading",
    "estimatedTimeMins": 30,
    "expectedComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "description": "At {{companyName}}, the {{department}} team monitors dynamic spot prices for cloud computing instances across consecutive billing intervals, recorded in an array prices where prices[i] is the instance price on the i-th day. As a {{roleTitle}} optimizing infrastructure spend in {{domain}}, you are permitted to choose a single day to reserve capacity and a different future day to liquidate the lease.\n\nReturn the maximum profit (cost differential) you can achieve from this transaction. If no profit can be achieved, return 0.",
    "functionName": "maxProfit",
    "parameters": [
      {
        "name": "prices",
        "type": "int[]"
      }
    ],
    "returnType": "int",
    "constraints": [
      "1 <= prices.length <= 100000",
      "0 <= prices[i] <= 10000"
    ],
    "testCases": [
      {
        "input": {
          "prices": [
            7,
            1,
            5,
            3,
            6,
            4
          ]
        },
        "expectedOutput": 5,
        "isHidden": false
      },
      {
        "input": {
          "prices": [
            7,
            6,
            4,
            3,
            1
          ]
        },
        "expectedOutput": 0,
        "isHidden": false
      },
      {
        "input": {
          "prices": [
            5
          ]
        },
        "expectedOutput": 0,
        "isHidden": true
      },
      {
        "input": {
          "prices": [
            1,
            2,
            3,
            4,
            5
          ]
        },
        "expectedOutput": 4,
        "isHidden": true
      },
      {
        "input": {
          "prices": [
            2,
            4,
            1
          ]
        },
        "expectedOutput": 2,
        "isHidden": true
      },
      {
        "input": {
          "prices": [
            3,
            3,
            3
          ]
        },
        "expectedOutput": 0,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} prices\n * @return {number}\n */\nfunction maxProfit(prices) {\n    // Write your solution here\n}",
      "python": "def maxProfit(prices: list[int]) -> int:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "prices = [7,1,5,3,6,4]",
        "output": "5",
        "expectedOutput": "5",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "prices = [7,6,4,3,1]",
        "output": "0",
        "expectedOutput": "0",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Coin Change",
    "slug": "coin-change",
    "difficulty": "Medium",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Dynamic Programming",
    "subtopic": "Unbounded Knapsack",
    "estimatedTimeMins": 30,
    "expectedComplexity": {
      "time": "O(N * amount)",
      "space": "O(amount)"
    },
    "description": "At {{companyName}}'s {{location}} financial operations hub, the {{department}} payment gateway settles payouts using fixed cash denomination units listed in the array coins. As a {{roleTitle}} working on payment optimization in {{domain}}, write a function to calculate the minimum number of coins needed to make up the target transaction amount.\n\nIf that amount cannot be formed by any combination of the coins, return -1. You may assume you have an infinite supply of each coin denomination.",
    "functionName": "coinChange",
    "parameters": [
      {
        "name": "coins",
        "type": "int[]"
      },
      {
        "name": "amount",
        "type": "int"
      }
    ],
    "returnType": "int",
    "constraints": [
      "1 <= coins.length <= 12",
      "1 <= coins[i] <= 2147483647",
      "0 <= amount <= 10000"
    ],
    "testCases": [
      {
        "input": {
          "coins": [
            1,
            2,
            5
          ],
          "amount": 11
        },
        "expectedOutput": 3,
        "isHidden": false
      },
      {
        "input": {
          "coins": [
            2
          ],
          "amount": 3
        },
        "expectedOutput": -1,
        "isHidden": false
      },
      {
        "input": {
          "coins": [
            1
          ],
          "amount": 0
        },
        "expectedOutput": 0,
        "isHidden": true
      },
      {
        "input": {
          "coins": [
            186,
            419,
            83,
            408
          ],
          "amount": 6249
        },
        "expectedOutput": 20,
        "isHidden": true
      },
      {
        "input": {
          "coins": [
            3,
            7
          ],
          "amount": 11
        },
        "expectedOutput": -1,
        "isHidden": true
      },
      {
        "input": {
          "coins": [
            1,
            3,
            4
          ],
          "amount": 6
        },
        "expectedOutput": 2,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} coins\n * @param {number} amount\n * @return {number}\n */\nfunction coinChange(coins, amount) {\n    // Write your solution here\n}",
      "python": "def coinChange(coins: list[int], amount: int) -> int:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "coins = [1,2,5], amount = 11",
        "output": "3",
        "expectedOutput": "3",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "coins = [2], amount = 3",
        "output": "-1",
        "expectedOutput": "-1",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Edit Distance",
    "slug": "edit-distance",
    "difficulty": "Medium",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Dynamic Programming",
    "subtopic": "String DP",
    "estimatedTimeMins": 30,
    "expectedComplexity": {
      "time": "O(M * N)",
      "space": "O(M * N)"
    },
    "description": "At {{companyName}}, the {{department}} search and query pipeline corrects typographical errors in user search terms. Given a raw input query word1 and the intended catalog keyword word2, as a {{roleTitle}} in {{domain}}, determine the minimum number of operations required to transform word1 into word2.\n\nYou have the following three operations permitted on a word:\n- Insert a character\n- Delete a character\n- Replace a character",
    "functionName": "minDistance",
    "parameters": [
      {
        "name": "word1",
        "type": "string"
      },
      {
        "name": "word2",
        "type": "string"
      }
    ],
    "returnType": "int",
    "constraints": [
      "0 <= word1.length, word2.length <= 500",
      "Both strings contain only lowercase English letters"
    ],
    "testCases": [
      {
        "input": {
          "word1": "horse",
          "word2": "ros"
        },
        "expectedOutput": 3,
        "isHidden": false
      },
      {
        "input": {
          "word1": "intention",
          "word2": "execution"
        },
        "expectedOutput": 5,
        "isHidden": false
      },
      {
        "input": {
          "word1": "",
          "word2": "abc"
        },
        "expectedOutput": 3,
        "isHidden": true
      },
      {
        "input": {
          "word1": "abc",
          "word2": ""
        },
        "expectedOutput": 3,
        "isHidden": true
      },
      {
        "input": {
          "word1": "same",
          "word2": "same"
        },
        "expectedOutput": 0,
        "isHidden": true
      },
      {
        "input": {
          "word1": "kitten",
          "word2": "sitting"
        },
        "expectedOutput": 3,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {string} word1\n * @param {string} word2\n * @return {number}\n */\nfunction minDistance(word1, word2) {\n    // Write your solution here\n}",
      "python": "def minDistance(word1: str, word2: str) -> int:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "word1 = \"horse\", word2 = \"ros\"",
        "output": "3",
        "expectedOutput": "3",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "word1 = \"intention\", word2 = \"execution\"",
        "output": "5",
        "expectedOutput": "5",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Search in Rotated Sorted Array",
    "slug": "search-in-rotated-sorted-array",
    "difficulty": "Medium",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Searching & Sorting",
    "subtopic": "Binary Search",
    "estimatedTimeMins": 30,
    "expectedComplexity": {
      "time": "O(log N)",
      "space": "O(1)"
    },
    "description": "At {{companyName}}, the {{department}} distributed caching layer maintains a partitioned dataset sorted in ascending order with distinct values in nums. During a node rebalancing event across {{location}}, the array was rotated at an unknown pivot index k (1 <= k < nums.length). As a {{roleTitle}} in {{domain}}, find the index of target in nums in O(log n) runtime, or return -1 if it is not in nums.",
    "functionName": "search",
    "parameters": [
      {
        "name": "nums",
        "type": "int[]"
      },
      {
        "name": "target",
        "type": "int"
      }
    ],
    "returnType": "int",
    "constraints": [
      "1 <= nums.length <= 5000",
      "-10000 <= nums[i], target <= 10000",
      "All values of nums are unique",
      "nums is a sorted array rotated at an unknown pivot"
    ],
    "testCases": [
      {
        "input": {
          "nums": [
            4,
            5,
            6,
            7,
            0,
            1,
            2
          ],
          "target": 0
        },
        "expectedOutput": 4,
        "isHidden": false
      },
      {
        "input": {
          "nums": [
            4,
            5,
            6,
            7,
            0,
            1,
            2
          ],
          "target": 3
        },
        "expectedOutput": -1,
        "isHidden": false
      },
      {
        "input": {
          "nums": [
            1
          ],
          "target": 0
        },
        "expectedOutput": -1,
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            1
          ],
          "target": 1
        },
        "expectedOutput": 0,
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            3,
            1
          ],
          "target": 1
        },
        "expectedOutput": 1,
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            5,
            1,
            3
          ],
          "target": 5
        },
        "expectedOutput": 0,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number}\n */\nfunction search(nums, target) {\n    // Write your solution here\n}",
      "python": "def search(nums: list[int], target: int) -> int:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "nums = [4,5,6,7,0,1,2], target = 0",
        "output": "4",
        "expectedOutput": "4",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "nums = [4,5,6,7,0,1,2], target = 3",
        "output": "-1",
        "expectedOutput": "-1",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Maximum Product Subarray",
    "slug": "maximum-product-subarray",
    "difficulty": "Medium",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Arrays",
    "subtopic": "Kadane's Variant",
    "estimatedTimeMins": 30,
    "expectedComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "description": "At {{companyName}}, the {{department}} risk analytics engine tracks volatility multipliers for financial transactions in an array nums. Each element represents a compounding factor (values > 1 amplify yield, values between 0 and 1 compress it, and negative values invert balance direction). As a {{roleTitle}} in {{domain}}, find the contiguous subarray that produces the largest product, and return that product.",
    "functionName": "maxProduct",
    "parameters": [
      {
        "name": "nums",
        "type": "int[]"
      }
    ],
    "returnType": "int",
    "constraints": [
      "1 <= nums.length <= 20000",
      "-10 <= nums[i] <= 10",
      "The product of any prefix or suffix of nums fits in a 32-bit integer"
    ],
    "testCases": [
      {
        "input": {
          "nums": [
            2,
            3,
            -2,
            4
          ]
        },
        "expectedOutput": 6,
        "isHidden": false
      },
      {
        "input": {
          "nums": [
            -2,
            0,
            -1
          ]
        },
        "expectedOutput": 0,
        "isHidden": false
      },
      {
        "input": {
          "nums": [
            -2
          ]
        },
        "expectedOutput": -2,
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            -2,
            3,
            -4
          ]
        },
        "expectedOutput": 24,
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            0,
            2
          ]
        },
        "expectedOutput": 2,
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            2,
            -5,
            -2,
            -4,
            3
          ]
        },
        "expectedOutput": 24,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} nums\n * @return {number}\n */\nfunction maxProduct(nums) {\n    // Write your solution here\n}",
      "python": "def maxProduct(nums: list[int]) -> int:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "nums = [2,3,-2,4]",
        "output": "6",
        "expectedOutput": "6",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "nums = [-2,0,-1]",
        "output": "0",
        "expectedOutput": "0",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Trapping Rain Water",
    "slug": "trapping-rain-water",
    "difficulty": "Hard",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Arrays",
    "subtopic": "Two Pointers",
    "estimatedTimeMins": 45,
    "expectedComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "description": "At {{companyName}}'s {{location}} logistics terminal, cargo elevation profiles are represented by an elevation map array height where the width of each container bar is 1. During severe monsoon seasons, rainfall accumulates in the crevices between containers. As a {{roleTitle}} in {{domain}}, compute how much water the terminal structure can trap after raining.",
    "functionName": "trap",
    "parameters": [
      {
        "name": "height",
        "type": "int[]"
      }
    ],
    "returnType": "int",
    "constraints": [
      "1 <= height.length <= 20000",
      "0 <= height[i] <= 100000"
    ],
    "testCases": [
      {
        "input": {
          "height": [
            0,
            1,
            0,
            2,
            1,
            0,
            1,
            3,
            2,
            1,
            2,
            1
          ]
        },
        "expectedOutput": 6,
        "isHidden": false
      },
      {
        "input": {
          "height": [
            4,
            2,
            0,
            3,
            2,
            5
          ]
        },
        "expectedOutput": 9,
        "isHidden": false
      },
      {
        "input": {
          "height": [
            1
          ]
        },
        "expectedOutput": 0,
        "isHidden": true
      },
      {
        "input": {
          "height": [
            3,
            0,
            3
          ]
        },
        "expectedOutput": 3,
        "isHidden": true
      },
      {
        "input": {
          "height": [
            5,
            4,
            3,
            2,
            1
          ]
        },
        "expectedOutput": 0,
        "isHidden": true
      },
      {
        "input": {
          "height": [
            2,
            0,
            2,
            0,
            2
          ]
        },
        "expectedOutput": 4,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} height\n * @return {number}\n */\nfunction trap(height) {\n    // Write your solution here\n}",
      "python": "def trap(height: list[int]) -> int:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        "output": "6",
        "expectedOutput": "6",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "height = [4,2,0,3,2,5]",
        "output": "9",
        "expectedOutput": "9",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Word Break",
    "slug": "word-break",
    "difficulty": "Medium",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Dynamic Programming",
    "subtopic": "String DP",
    "estimatedTimeMins": 30,
    "expectedComplexity": {
      "time": "O(N^2)",
      "space": "O(N)"
    },
    "description": "At {{companyName}}, the {{department}} ingestion engine processes unsegmented query strings s received from voice and mobile search inputs. Given a dictionary of verified catalog terms wordDict, as a {{roleTitle}} in {{domain}}, determine if the string s can be segmented into a space-separated sequence of one or more catalog words.\n\nNote that the same word in the dictionary may be reused multiple times in the segmentation.",
    "functionName": "wordBreak",
    "parameters": [
      {
        "name": "s",
        "type": "string"
      },
      {
        "name": "wordDict",
        "type": "string[]"
      }
    ],
    "returnType": "boolean",
    "constraints": [
      "1 <= s.length <= 300",
      "1 <= wordDict.length <= 1000",
      "1 <= wordDict[i].length <= 20",
      "All strings consist of lowercase English letters; words in wordDict are unique"
    ],
    "testCases": [
      {
        "input": {
          "s": "leetcode",
          "wordDict": [
            "leet",
            "code"
          ]
        },
        "expectedOutput": true,
        "isHidden": false
      },
      {
        "input": {
          "s": "catsandog",
          "wordDict": [
            "cats",
            "dog",
            "sand",
            "and",
            "cat"
          ]
        },
        "expectedOutput": false,
        "isHidden": false
      },
      {
        "input": {
          "s": "applepenapple",
          "wordDict": [
            "apple",
            "pen"
          ]
        },
        "expectedOutput": true,
        "isHidden": true
      },
      {
        "input": {
          "s": "a",
          "wordDict": [
            "b"
          ]
        },
        "expectedOutput": false,
        "isHidden": true
      },
      {
        "input": {
          "s": "aaaaaaa",
          "wordDict": [
            "aaaa",
            "aaa"
          ]
        },
        "expectedOutput": true,
        "isHidden": true
      },
      {
        "input": {
          "s": "cars",
          "wordDict": [
            "car",
            "ca",
            "rs"
          ]
        },
        "expectedOutput": true,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {string} s\n * @param {string[]} wordDict\n * @return {boolean}\n */\nfunction wordBreak(s, wordDict) {\n    // Write your solution here\n}",
      "python": "def wordBreak(s: str, wordDict: list[str]) -> bool:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "s = \"leetcode\", wordDict = [\"leet\",\"code\"]",
        "output": "true",
        "expectedOutput": "true",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "s = \"catsandog\", wordDict = [\"cats\",\"dog\",\"sand\",\"and\",\"cat\"]",
        "output": "false",
        "expectedOutput": "false",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Longest Common Subsequence",
    "slug": "longest-common-subsequence",
    "difficulty": "Medium",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Dynamic Programming",
    "subtopic": "String DP",
    "estimatedTimeMins": 30,
    "expectedComplexity": {
      "time": "O(M * N)",
      "space": "O(M * N)"
    },
    "description": "At {{companyName}}, the {{department}} data synchronization pipeline compares two event audit logs, text1 and text2, where each character represents an event state. As a {{roleTitle}} in {{domain}}, find the length of their longest common subsequence to measure telemetry alignment across {{location}}.\n\nA subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters. If there is no common subsequence, return 0.",
    "functionName": "longestCommonSubsequence",
    "parameters": [
      {
        "name": "text1",
        "type": "string"
      },
      {
        "name": "text2",
        "type": "string"
      }
    ],
    "returnType": "int",
    "constraints": [
      "1 <= text1.length, text2.length <= 1000",
      "Both strings contain only lowercase or uppercase English letters"
    ],
    "testCases": [
      {
        "input": {
          "text1": "abcde",
          "text2": "ace"
        },
        "expectedOutput": 3,
        "isHidden": false
      },
      {
        "input": {
          "text1": "abc",
          "text2": "def"
        },
        "expectedOutput": 0,
        "isHidden": false
      },
      {
        "input": {
          "text1": "abc",
          "text2": "abc"
        },
        "expectedOutput": 3,
        "isHidden": true
      },
      {
        "input": {
          "text1": "bl",
          "text2": "yby"
        },
        "expectedOutput": 1,
        "isHidden": true
      },
      {
        "input": {
          "text1": "AGGTAB",
          "text2": "GXTXAYB"
        },
        "expectedOutput": 4,
        "isHidden": true
      },
      {
        "input": {
          "text1": "a",
          "text2": "a"
        },
        "expectedOutput": 1,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {string} text1\n * @param {string} text2\n * @return {number}\n */\nfunction longestCommonSubsequence(text1, text2) {\n    // Write your solution here\n}",
      "python": "def longestCommonSubsequence(text1: str, text2: str) -> int:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "text1 = \"abcde\", text2 = \"ace\"",
        "output": "3",
        "expectedOutput": "3",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "text1 = \"abc\", text2 = \"def\"",
        "output": "0",
        "expectedOutput": "0",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Number of Islands",
    "slug": "number-of-islands",
    "difficulty": "Medium",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Graphs",
    "subtopic": "DFS / BFS",
    "estimatedTimeMins": 30,
    "expectedComplexity": {
      "time": "O(M * N)",
      "space": "O(M * N)"
    },
    "description": "At {{companyName}}'s {{location}} facility, the {{department}} spatial intelligence engine analyzes regional delivery zones represented as an m x n binary grid grid where '1' represents an active service hub and '0' represents inactive terrain. As a {{roleTitle}} in {{domain}}, determine the total number of connected service clusters (islands).\n\nAn island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are completely surrounded by water.",
    "functionName": "numIslands",
    "parameters": [
      {
        "name": "grid",
        "type": "char[][]"
      }
    ],
    "returnType": "int",
    "constraints": [
      "1 <= grid.length, grid[0].length <= 300",
      "grid[i][j] is '0' or '1'"
    ],
    "ioNote": "grid is an array of rows; each row is an array of single-character strings '0' or '1'.",
    "testCases": [
      {
        "input": {
          "grid": [
            [
              "1",
              "1",
              "1",
              "1",
              "0"
            ],
            [
              "1",
              "1",
              "0",
              "1",
              "0"
            ],
            [
              "1",
              "1",
              "0",
              "0",
              "0"
            ],
            [
              "0",
              "0",
              "0",
              "0",
              "0"
            ]
          ]
        },
        "expectedOutput": 1,
        "isHidden": false
      },
      {
        "input": {
          "grid": [
            [
              "1",
              "1",
              "0",
              "0",
              "0"
            ],
            [
              "1",
              "1",
              "0",
              "0",
              "0"
            ],
            [
              "0",
              "0",
              "1",
              "0",
              "0"
            ],
            [
              "0",
              "0",
              "0",
              "1",
              "1"
            ]
          ]
        },
        "expectedOutput": 3,
        "isHidden": false
      },
      {
        "input": {
          "grid": [
            [
              "1"
            ]
          ]
        },
        "expectedOutput": 1,
        "isHidden": true
      },
      {
        "input": {
          "grid": [
            [
              "0"
            ]
          ]
        },
        "expectedOutput": 0,
        "isHidden": true
      },
      {
        "input": {
          "grid": [
            [
              "1",
              "0",
              "1"
            ],
            [
              "0",
              "1",
              "0"
            ],
            [
              "1",
              "0",
              "1"
            ]
          ]
        },
        "expectedOutput": 5,
        "isHidden": true
      },
      {
        "input": {
          "grid": [
            [
              "1",
              "1",
              "1"
            ],
            [
              "1",
              "1",
              "1"
            ],
            [
              "1",
              "1",
              "1"
            ]
          ]
        },
        "expectedOutput": 1,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {character[][]} grid\n * @return {number}\n */\nfunction numIslands(grid) {\n    // Write your solution here\n}",
      "python": "def numIslands(grid: list[list[str]]) -> int:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "grid = [[\"1\",\"1\",\"1\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"0\",\"0\"]]",
        "output": "1",
        "expectedOutput": "1",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "grid = [[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"1\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"1\",\"1\"]]",
        "output": "3",
        "expectedOutput": "3",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Median of Two Sorted Arrays",
    "slug": "median-of-two-sorted-arrays",
    "difficulty": "Hard",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Searching & Sorting",
    "subtopic": "Binary Search",
    "estimatedTimeMins": 45,
    "expectedComplexity": {
      "time": "O(log(min(M, N)))",
      "space": "O(1)"
    },
    "description": "At {{companyName}}, the {{department}} analytics engine merges telemetry latency metrics from two independent server clusters in {{location}}, stored in two sorted arrays nums1 and nums2 of size m and n respectively. As a {{roleTitle}} in {{domain}}, find the median latency of the two sorted arrays with an overall run time complexity of O(log(m+n)).",
    "functionName": "findMedianSortedArrays",
    "parameters": [
      {
        "name": "nums1",
        "type": "int[]"
      },
      {
        "name": "nums2",
        "type": "int[]"
      }
    ],
    "returnType": "double",
    "constraints": [
      "0 <= nums1.length, nums2.length <= 1000",
      "1 <= nums1.length + nums2.length <= 2000",
      "-1000000 <= nums1[i], nums2[i] <= 1000000",
      "Both arrays are sorted in non-decreasing order"
    ],
    "ioNote": "Answers are compared with an absolute tolerance of 1e-5.",
    "checker": "tolerance",
    "testCases": [
      {
        "input": {
          "nums1": [
            1,
            3
          ],
          "nums2": [
            2
          ]
        },
        "expectedOutput": 2,
        "isHidden": false
      },
      {
        "input": {
          "nums1": [
            1,
            2
          ],
          "nums2": [
            3,
            4
          ]
        },
        "expectedOutput": 2.5,
        "isHidden": false
      },
      {
        "input": {
          "nums1": [],
          "nums2": [
            1
          ]
        },
        "expectedOutput": 1,
        "isHidden": true
      },
      {
        "input": {
          "nums1": [
            0,
            0
          ],
          "nums2": [
            0,
            0
          ]
        },
        "expectedOutput": 0,
        "isHidden": true
      },
      {
        "input": {
          "nums1": [
            2
          ],
          "nums2": []
        },
        "expectedOutput": 2,
        "isHidden": true
      },
      {
        "input": {
          "nums1": [
            1,
            3,
            8,
            9,
            15
          ],
          "nums2": [
            7,
            11,
            18,
            19,
            21,
            25
          ]
        },
        "expectedOutput": 11,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} nums1\n * @param {number[]} nums2\n * @return {number}\n */\nfunction findMedianSortedArrays(nums1, nums2) {\n    // Write your solution here\n}",
      "python": "def findMedianSortedArrays(nums1: list[int], nums2: list[int]) -> float:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "nums1 = [1,3], nums2 = [2]",
        "output": "2",
        "expectedOutput": "2",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "nums1 = [1,2], nums2 = [3,4]",
        "output": "2.5",
        "expectedOutput": "2.5",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Longest Common Prefix",
    "slug": "longest-common-prefix",
    "difficulty": "Easy",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Strings",
    "subtopic": "String Matching",
    "estimatedTimeMins": 20,
    "expectedComplexity": {
      "time": "O(S)",
      "space": "O(1)"
    },
    "description": "At {{companyName}}, the {{department}} microservice architecture routes API requests based on hierarchical URI paths stored in an array of strings strs. As a {{roleTitle}} in {{domain}}, write a function to find the longest common prefix string amongst the array of paths.\n\nIf there is no common prefix, return an empty string \"\".",
    "functionName": "longestCommonPrefix",
    "parameters": [
      {
        "name": "strs",
        "type": "string[]"
      }
    ],
    "returnType": "string",
    "constraints": [
      "1 <= strs.length <= 200",
      "0 <= strs[i].length <= 200",
      "strs[i] consists of lowercase English letters"
    ],
    "testCases": [
      {
        "input": {
          "strs": [
            "flower",
            "flow",
            "flight"
          ]
        },
        "expectedOutput": "fl",
        "isHidden": false
      },
      {
        "input": {
          "strs": [
            "dog",
            "racecar",
            "car"
          ]
        },
        "expectedOutput": "",
        "isHidden": false
      },
      {
        "input": {
          "strs": [
            "alone"
          ]
        },
        "expectedOutput": "alone",
        "isHidden": true
      },
      {
        "input": {
          "strs": [
            "interview",
            "internet",
            "interval",
            "internal"
          ]
        },
        "expectedOutput": "inter",
        "isHidden": true
      },
      {
        "input": {
          "strs": [
            "",
            "b"
          ]
        },
        "expectedOutput": "",
        "isHidden": true
      },
      {
        "input": {
          "strs": [
            "same",
            "same",
            "same"
          ]
        },
        "expectedOutput": "same",
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {string[]} strs\n * @return {string}\n */\nfunction longestCommonPrefix(strs) {\n    // Write your solution here\n}",
      "python": "def longestCommonPrefix(strs: list[str]) -> str:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "strs = [\"flower\",\"flow\",\"flight\"]",
        "output": "fl",
        "expectedOutput": "fl",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "strs = [\"dog\",\"racecar\",\"car\"]",
        "output": "",
        "expectedOutput": "",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Longest Palindromic Substring",
    "slug": "longest-palindromic-substring",
    "difficulty": "Medium",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Strings",
    "subtopic": "Two Pointers",
    "estimatedTimeMins": 30,
    "expectedComplexity": {
      "time": "O(N^2)",
      "space": "O(1)"
    },
    "description": "At {{companyName}}, the {{department}} data integrity team verifies bidirectional communication frames in a network stream string s. A symmetrical frame (palindrome) indicates a valid handshake. As a {{roleTitle}} in {{domain}}, return the longest palindromic substring in s.",
    "functionName": "longestPalindrome",
    "parameters": [
      {
        "name": "s",
        "type": "string"
      }
    ],
    "returnType": "string",
    "constraints": [
      "1 <= s.length <= 1000",
      "s consists of digits and English letters"
    ],
    "testCases": [
      {
        "input": {
          "s": "babad"
        },
        "expectedOutput": "bab",
        "isHidden": false
      },
      {
        "input": {
          "s": "cbbd"
        },
        "expectedOutput": "bb",
        "isHidden": false
      },
      {
        "input": {
          "s": "a"
        },
        "expectedOutput": "a",
        "isHidden": true
      },
      {
        "input": {
          "s": "forgeeksskeegfor"
        },
        "expectedOutput": "geeksskeeg",
        "isHidden": true
      },
      {
        "input": {
          "s": "abcd"
        },
        "expectedOutput": "a",
        "isHidden": true
      },
      {
        "input": {
          "s": "racecar"
        },
        "expectedOutput": "racecar",
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {string} s\n * @return {string}\n */\nfunction longestPalindrome(s) {\n    // Write your solution here\n}",
      "python": "def longestPalindrome(s: str) -> str:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "s = \"babad\"",
        "output": "bab",
        "expectedOutput": "bab",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "s = \"cbbd\"",
        "output": "bb",
        "expectedOutput": "bb",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Container With Most Water",
    "slug": "container-with-most-water",
    "difficulty": "Medium",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Sliding Window & Two Pointers",
    "subtopic": "Two Pointers",
    "estimatedTimeMins": 30,
    "expectedComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "description": "At {{companyName}}'s {{location}} data center, cooling conduits are spaced along an axis, with heights given in an integer array height of length n. Two conduits, together with the horizontal base, form a thermal reservoir. As a {{roleTitle}} in {{domain}}, find two conduits that together with the x-axis form a container that stores the maximum volume of coolant.\n\nReturn the maximum amount of water a container can store. Notice that you may not slant the container.",
    "functionName": "maxArea",
    "parameters": [
      {
        "name": "height",
        "type": "int[]"
      }
    ],
    "returnType": "int",
    "constraints": [
      "2 <= height.length <= 100000",
      "0 <= height[i] <= 10000"
    ],
    "testCases": [
      {
        "input": {
          "height": [
            1,
            8,
            6,
            2,
            5,
            4,
            8,
            3,
            7
          ]
        },
        "expectedOutput": 49,
        "isHidden": false
      },
      {
        "input": {
          "height": [
            1,
            1
          ]
        },
        "expectedOutput": 1,
        "isHidden": false
      },
      {
        "input": {
          "height": [
            4,
            3,
            2,
            1,
            4
          ]
        },
        "expectedOutput": 16,
        "isHidden": true
      },
      {
        "input": {
          "height": [
            1,
            2,
            1
          ]
        },
        "expectedOutput": 2,
        "isHidden": true
      },
      {
        "input": {
          "height": [
            2,
            3,
            4,
            5,
            18,
            17,
            6
          ]
        },
        "expectedOutput": 17,
        "isHidden": true
      },
      {
        "input": {
          "height": [
            0,
            0,
            0,
            5
          ]
        },
        "expectedOutput": 0,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} height\n * @return {number}\n */\nfunction maxArea(height) {\n    // Write your solution here\n}",
      "python": "def maxArea(height: list[int]) -> int:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "height = [1,8,6,2,5,4,8,3,7]",
        "output": "49",
        "expectedOutput": "49",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "height = [1,1]",
        "output": "1",
        "expectedOutput": "1",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Two Sum",
    "slug": "two-sum",
    "difficulty": "Easy",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Arrays & Hashing",
    "subtopic": "Hash Map",
    "estimatedTimeMins": 20,
    "expectedComplexity": {
      "time": "O(N)",
      "space": "O(N)"
    },
    "description": "At {{companyName}}, the {{department}} accounting engine matches transaction ledger entries. Given an array of integers nums and an integer target, as a {{roleTitle}} in {{domain}}, return indices of the two numbers such that they add up to target.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
    "functionName": "twoSum",
    "parameters": [
      {
        "name": "nums",
        "type": "int[]"
      },
      {
        "name": "target",
        "type": "int"
      }
    ],
    "returnType": "int[]",
    "constraints": [
      "2 <= nums.length <= 10000",
      "-1000000000 <= nums[i], target <= 1000000000",
      "Exactly one valid answer exists"
    ],
    "ioNote": "Return the two indices sorted in ascending order.",
    "testCases": [
      {
        "input": {
          "nums": [
            2,
            7,
            11,
            15
          ],
          "target": 9
        },
        "expectedOutput": [
          0,
          1
        ],
        "isHidden": false
      },
      {
        "input": {
          "nums": [
            3,
            2,
            4
          ],
          "target": 6
        },
        "expectedOutput": [
          1,
          2
        ],
        "isHidden": false
      },
      {
        "input": {
          "nums": [
            3,
            3
          ],
          "target": 6
        },
        "expectedOutput": [
          0,
          1
        ],
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            -1,
            -2,
            -3,
            -4,
            -5
          ],
          "target": -8
        },
        "expectedOutput": [
          2,
          4
        ],
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            0,
            4,
            3,
            0
          ],
          "target": 0
        },
        "expectedOutput": [
          0,
          3
        ],
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            1,
            5,
            9,
            14
          ],
          "target": 23
        },
        "expectedOutput": [
          2,
          3
        ],
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nfunction twoSum(nums, target) {\n    // Write your solution here\n}",
      "python": "def twoSum(nums: list[int], target: int) -> list[int]:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "nums = [2,7,11,15], target = 9",
        "output": "[0,1]",
        "expectedOutput": "[0,1]",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "nums = [3,2,4], target = 6",
        "output": "[1,2]",
        "expectedOutput": "[1,2]",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "LRU Cache",
    "slug": "lru-cache",
    "difficulty": "Medium",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Linked List",
    "subtopic": "Design",
    "estimatedTimeMins": 30,
    "expectedComplexity": {
      "time": "O(1)",
      "space": "O(Capacity)"
    },
    "description": "At {{companyName}}, the {{department}} high-performance caching infrastructure requires an in-memory storage engine adhering to the Least Recently Used (LRU) eviction policy. As a {{roleTitle}} in {{domain}}, implement the LRUCache class:\n\n- LRUCache(int capacity) Initialize the LRU cache with positive size capacity.\n- int get(int key) Return the value of the key if the key exists, otherwise return -1.\n- void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.\n\nThe functions get and put must each run in O(1) average time complexity.",
    "functionName": "LRUCache",
    "parameters": [
      {
        "name": "capacity",
        "type": "int"
      }
    ],
    "returnType": "void",
    "constraints": [
      "1 <= capacity <= 3000",
      "0 <= key <= 10000",
      "0 <= value <= 1000000000",
      "At most 200000 calls to get and put"
    ],
    "ioNote": "Test input: 'operations' is the list of method names called after construction and 'arguments' holds each call's arguments. expectedOutput lists each call's return value (null for put).",
    "testCases": [
      {
        "input": {
          "capacity": 2,
          "operations": [
            "put",
            "put",
            "get",
            "put",
            "get",
            "put",
            "get",
            "get",
            "get"
          ],
          "arguments": [
            [
              1,
              1
            ],
            [
              2,
              2
            ],
            [
              1
            ],
            [
              3,
              3
            ],
            [
              2
            ],
            [
              4,
              4
            ],
            [
              1
            ],
            [
              3
            ],
            [
              4
            ]
          ]
        },
        "expectedOutput": [
          null,
          null,
          1,
          null,
          -1,
          null,
          -1,
          3,
          4
        ],
        "isHidden": false
      },
      {
        "input": {
          "capacity": 1,
          "operations": [
            "put",
            "get",
            "put",
            "get",
            "get"
          ],
          "arguments": [
            [
              2,
              1
            ],
            [
              2
            ],
            [
              3,
              2
            ],
            [
              2
            ],
            [
              3
            ]
          ]
        },
        "expectedOutput": [
          null,
          1,
          null,
          -1,
          2
        ],
        "isHidden": false
      },
      {
        "input": {
          "capacity": 2,
          "operations": [
            "put",
            "put",
            "put",
            "get",
            "get"
          ],
          "arguments": [
            [
              1,
              10
            ],
            [
              1,
              20
            ],
            [
              2,
              30
            ],
            [
              1
            ],
            [
              2
            ]
          ]
        },
        "expectedOutput": [
          null,
          null,
          null,
          20,
          30
        ],
        "isHidden": true
      },
      {
        "input": {
          "capacity": 3,
          "operations": [
            "put",
            "put",
            "put",
            "get",
            "put",
            "get",
            "get",
            "get"
          ],
          "arguments": [
            [
              1,
              1
            ],
            [
              2,
              2
            ],
            [
              3,
              3
            ],
            [
              1
            ],
            [
              4,
              4
            ],
            [
              2
            ],
            [
              3
            ],
            [
              4
            ]
          ]
        },
        "expectedOutput": [
          null,
          null,
          null,
          1,
          null,
          -1,
          3,
          4
        ],
        "isHidden": true
      },
      {
        "input": {
          "capacity": 2,
          "operations": [
            "get",
            "put",
            "get",
            "put",
            "put",
            "get",
            "get"
          ],
          "arguments": [
            [
              5
            ],
            [
              5,
              50
            ],
            [
              5
            ],
            [
              6,
              60
            ],
            [
              7,
              70
            ],
            [
              5
            ],
            [
              6
            ]
          ]
        },
        "expectedOutput": [
          -1,
          null,
          50,
          null,
          null,
          -1,
          60
        ],
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} capacity\n */\nvar LRUCache = function(capacity) {\n    \n};\n\n/** \n * @param {number} key\n * @return {number}\n */\nLRUCache.prototype.get = function(key) {\n    \n};\n\n/** \n * @param {number} key \n * @param {number} value\n * @return {void}\n */\nLRUCache.prototype.put = function(key, value) {\n    \n};",
      "python": "class LRUCache:\n\n    def __init__(self, capacity: int):\n        pass\n\n    def get(self, key: int) -> int:\n        pass\n\n    def put(self, key: int, value: int) -> None:\n        pass"
    },
    "examples": [
      {
        "input": "capacity = 2, operations = [\"put\",\"put\",\"get\",\"put\",\"get\",\"put\",\"get\",\"get\",\"get\"], arguments = [[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]",
        "output": "[null,null,1,null,-1,null,-1,3,4]",
        "expectedOutput": "[null,null,1,null,-1,null,-1,3,4]",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "capacity = 1, operations = [\"put\",\"get\",\"put\",\"get\",\"get\"], arguments = [[2,1],[2],[3,2],[2],[3]]",
        "output": "[null,1,null,-1,2]",
        "expectedOutput": "[null,1,null,-1,2]",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Valid Parentheses",
    "slug": "valid-parentheses",
    "difficulty": "Easy",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Stacks & Queues",
    "subtopic": "Stack",
    "estimatedTimeMins": 20,
    "expectedComplexity": {
      "time": "O(N)",
      "space": "O(N)"
    },
    "description": "At {{companyName}}, the {{department}} schema validation compiler parses configuration templates. The template contains a string s consisting only of the bracket characters '(', ')', '{', '}', '[' and ']'. As a {{roleTitle}} in {{domain}}, determine if the input configuration string is valid.\n\nAn input string is valid if:\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.\n3. Every close bracket has a corresponding open bracket of the same type.",
    "functionName": "isValid",
    "parameters": [
      {
        "name": "s",
        "type": "string"
      }
    ],
    "returnType": "boolean",
    "constraints": [
      "1 <= s.length <= 10000",
      "s consists only of '()[]{}'"
    ],
    "testCases": [
      {
        "input": {
          "s": "()"
        },
        "expectedOutput": true,
        "isHidden": false
      },
      {
        "input": {
          "s": "()[]{}"
        },
        "expectedOutput": true,
        "isHidden": false
      },
      {
        "input": {
          "s": "(]"
        },
        "expectedOutput": false,
        "isHidden": true
      },
      {
        "input": {
          "s": "([)]"
        },
        "expectedOutput": false,
        "isHidden": true
      },
      {
        "input": {
          "s": "{[]}"
        },
        "expectedOutput": true,
        "isHidden": true
      },
      {
        "input": {
          "s": "]"
        },
        "expectedOutput": false,
        "isHidden": true
      },
      {
        "input": {
          "s": "(("
        },
        "expectedOutput": false,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {string} s\n * @return {boolean}\n */\nfunction isValid(s) {\n    // Write your solution here\n}",
      "python": "def isValid(s: str) -> bool:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "s = \"()\"",
        "output": "true",
        "expectedOutput": "true",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "s = \"()[]{}\"",
        "output": "true",
        "expectedOutput": "true",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Find Median From Data Stream",
    "slug": "find-median-from-data-stream",
    "difficulty": "Hard",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Heaps & Priority Queues",
    "subtopic": "Two Heaps",
    "estimatedTimeMins": 45,
    "expectedComplexity": {
      "time": "O(log N)",
      "space": "O(N)"
    },
    "description": "At {{companyName}}, the {{department}} real-time monitoring engine ingests continuous high-frequency transaction latencies from service endpoints in {{location}}. As a {{roleTitle}} in {{domain}}, implement the MedianFinder class to compute the running median dynamically:\n\n- MedianFinder() initializes the MedianFinder object.\n- void addNum(int num) adds the integer num from the data stream to the data structure.\n- double findMedian() returns the median of all elements so far. Answers within 10^-5 of the actual answer will be accepted.",
    "functionName": "MedianFinder",
    "parameters": [],
    "returnType": "void",
    "constraints": [
      "-100000 <= num <= 100000",
      "findMedian is only called after at least one addNum",
      "At most 50000 calls in total"
    ],
    "ioNote": "Test input: 'operations' lists the method names and 'arguments' their arguments. expectedOutput has null for addNum and the median (double) for findMedian. Doubles compared with tolerance 1e-5.",
    "checker": "tolerance",
    "testCases": [
      {
        "input": {
          "operations": [
            "addNum",
            "addNum",
            "findMedian",
            "addNum",
            "findMedian"
          ],
          "arguments": [
            [
              1
            ],
            [
              2
            ],
            [],
            [
              3
            ],
            []
          ]
        },
        "expectedOutput": [
          null,
          null,
          1.5,
          null,
          2
        ],
        "isHidden": false
      },
      {
        "input": {
          "operations": [
            "addNum",
            "findMedian"
          ],
          "arguments": [
            [
              -5
            ],
            []
          ]
        },
        "expectedOutput": [
          null,
          -5
        ],
        "isHidden": false
      },
      {
        "input": {
          "operations": [
            "addNum",
            "addNum",
            "addNum",
            "addNum",
            "findMedian",
            "addNum",
            "findMedian"
          ],
          "arguments": [
            [
              5
            ],
            [
              15
            ],
            [
              1
            ],
            [
              3
            ],
            [],
            [
              8
            ],
            []
          ]
        },
        "expectedOutput": [
          null,
          null,
          null,
          null,
          4,
          null,
          5
        ],
        "isHidden": true
      },
      {
        "input": {
          "operations": [
            "addNum",
            "addNum",
            "findMedian",
            "addNum",
            "addNum",
            "findMedian"
          ],
          "arguments": [
            [
              0
            ],
            [
              0
            ],
            [],
            [
              100000
            ],
            [
              -100000
            ],
            []
          ]
        },
        "expectedOutput": [
          null,
          null,
          0,
          null,
          null,
          0
        ],
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "var MedianFinder = function() {\n    \n};\n\n/** \n * @param {number} num\n * @return {void}\n */\nMedianFinder.prototype.addNum = function(num) {\n    \n};\n\n/**\n * @return {number}\n */\nMedianFinder.prototype.findMedian = function() {\n    \n};",
      "python": "class MedianFinder:\n\n    def __init__(self):\n        pass\n\n    def addNum(self, num: int) -> None:\n        pass\n\n    def findMedian(self) -> float:\n        pass"
    },
    "examples": [
      {
        "input": "operations = [\"addNum\",\"addNum\",\"findMedian\",\"addNum\",\"findMedian\"], arguments = [[1],[2],[],[3],[]]",
        "output": "[null,null,1.5,null,2]",
        "expectedOutput": "[null,null,1.5,null,2]",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "operations = [\"addNum\",\"findMedian\"], arguments = [[-5],[]]",
        "output": "[null,-5]",
        "expectedOutput": "[null,-5]",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Kth Largest Element in an Array",
    "slug": "kth-largest-element-in-an-array",
    "difficulty": "Medium",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Heaps & Priority Queues",
    "subtopic": "Quick Select",
    "estimatedTimeMins": 30,
    "expectedComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "description": "At {{companyName}}, the {{department}} load balancer evaluates server node capacities stored in an unsorted integer array nums. As a {{roleTitle}} in {{domain}}, find the k-th largest capacity in the array to determine the threshold for scaling out.\n\nNote that it is the k-th largest element in sorted order, not the k-th distinct element. Can you solve it without sorting the entire array?",
    "functionName": "findKthLargest",
    "parameters": [
      {
        "name": "nums",
        "type": "int[]"
      },
      {
        "name": "k",
        "type": "int"
      }
    ],
    "returnType": "int",
    "constraints": [
      "1 <= k <= nums.length <= 100000",
      "-10000 <= nums[i] <= 10000"
    ],
    "testCases": [
      {
        "input": {
          "nums": [
            3,
            2,
            1,
            5,
            6,
            4
          ],
          "k": 2
        },
        "expectedOutput": 5,
        "isHidden": false
      },
      {
        "input": {
          "nums": [
            3,
            2,
            3,
            1,
            2,
            4,
            5,
            5,
            6
          ],
          "k": 4
        },
        "expectedOutput": 4,
        "isHidden": false
      },
      {
        "input": {
          "nums": [
            1
          ],
          "k": 1
        },
        "expectedOutput": 1,
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            7,
            7,
            7
          ],
          "k": 3
        },
        "expectedOutput": 7,
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            -1,
            -5,
            -3
          ],
          "k": 2
        },
        "expectedOutput": -3,
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            9,
            8,
            7,
            6,
            5
          ],
          "k": 5
        },
        "expectedOutput": 5,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number}\n */\nfunction findKthLargest(nums, k) {\n    // Write your solution here\n}",
      "python": "def findKthLargest(nums: list[int], k: int) -> int:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "nums = [3,2,1,5,6,4], k = 2",
        "output": "5",
        "expectedOutput": "5",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "nums = [3,2,3,1,2,4,5,5,6], k = 4",
        "output": "4",
        "expectedOutput": "4",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Fractional Knapsack Problem",
    "slug": "fractional-knapsack-problem",
    "difficulty": "Medium",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Greedy Algorithms",
    "subtopic": "Greedy",
    "estimatedTimeMins": 30,
    "expectedComplexity": {
      "time": "O(N log N)",
      "space": "O(1)"
    },
    "description": "At {{companyName}}'s {{location}} logistics depot, a freight cargo carrier has a maximum weight capacity W. Given an array of cargo items arr where each item has an associated weight and market value, as a {{roleTitle}} in {{domain}}, determine the maximum total value that can fit into the carrier. You are allowed to break items into fractional portions for optimal packing.",
    "functionName": "fractionalKnapsack",
    "parameters": [
      {
        "name": "W",
        "type": "int"
      },
      {
        "name": "arr",
        "type": "Item[]"
      }
    ],
    "returnType": "double",
    "constraints": [
      "1 <= arr.length <= 100000",
      "0 <= W <= 100000",
      "1 <= value, weight <= 100000"
    ],
    "ioNote": "Each Item is an object {\"value\": int, \"weight\": int}. expectedOutput is rounded to 6 decimals; compare with tolerance 1e-6.",
    "checker": "tolerance",
    "testCases": [
      {
        "input": {
          "W": 50,
          "arr": [
            {
              "value": 60,
              "weight": 10
            },
            {
              "value": 100,
              "weight": 20
            },
            {
              "value": 120,
              "weight": 30
            }
          ]
        },
        "expectedOutput": 240,
        "isHidden": false
      },
      {
        "input": {
          "W": 10,
          "arr": [
            {
              "value": 500,
              "weight": 30
            }
          ]
        },
        "expectedOutput": 166.666667,
        "isHidden": false
      },
      {
        "input": {
          "W": 0,
          "arr": [
            {
              "value": 10,
              "weight": 5
            }
          ]
        },
        "expectedOutput": 0,
        "isHidden": true
      },
      {
        "input": {
          "W": 100,
          "arr": [
            {
              "value": 10,
              "weight": 5
            },
            {
              "value": 20,
              "weight": 10
            }
          ]
        },
        "expectedOutput": 30,
        "isHidden": true
      },
      {
        "input": {
          "W": 7,
          "arr": [
            {
              "value": 10,
              "weight": 2
            },
            {
              "value": 5,
              "weight": 3
            },
            {
              "value": 15,
              "weight": 5
            },
            {
              "value": 7,
              "weight": 7
            },
            {
              "value": 6,
              "weight": 1
            },
            {
              "value": 18,
              "weight": 4
            },
            {
              "value": 3,
              "weight": 1
            }
          ]
        },
        "expectedOutput": 34,
        "isHidden": true
      },
      {
        "input": {
          "W": 15,
          "arr": [
            {
              "value": 4,
              "weight": 12
            },
            {
              "value": 2,
              "weight": 2
            },
            {
              "value": 1,
              "weight": 1
            },
            {
              "value": 2,
              "weight": 1
            },
            {
              "value": 10,
              "weight": 4
            }
          ]
        },
        "expectedOutput": 17.333333,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} W\n * @param {Item[]} arr\n * @return {number}\n */\nfunction fractionalKnapsack(W, arr) {\n    // Write your solution here\n}",
      "python": "def fractionalKnapsack(W: int, arr: Item[]) -> float:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "W = 50, arr = [{\"value\":60,\"weight\":10},{\"value\":100,\"weight\":20},{\"value\":120,\"weight\":30}]",
        "output": "240",
        "expectedOutput": "240",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "W = 10, arr = [{\"value\":500,\"weight\":30}]",
        "output": "166.666667",
        "expectedOutput": "166.666667",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Coin Change (Minimum Coins)",
    "slug": "coin-change-minimum-coins",
    "difficulty": "Medium",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Greedy Algorithms",
    "subtopic": "Greedy",
    "estimatedTimeMins": 30,
    "expectedComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "description": "At {{companyName}}, the {{department}} treasury system dispatches cash allowances to field agents across {{location}}. Given an array coins representing available currency denominations and a target monetary value V, as a {{roleTitle}} in {{domain}}, find the minimum number of coins required to form value V. If it is not possible to make the change, return -1.",
    "functionName": "minCoins",
    "parameters": [
      {
        "name": "coins",
        "type": "int[]"
      },
      {
        "name": "V",
        "type": "int"
      }
    ],
    "returnType": "int",
    "constraints": [
      "1 <= coins.length <= 100",
      "1 <= coins[i] <= 10000",
      "0 <= V <= 10000"
    ],
    "testCases": [
      {
        "input": {
          "coins": [
            25,
            10,
            5
          ],
          "V": 30
        },
        "expectedOutput": 2,
        "isHidden": false
      },
      {
        "input": {
          "coins": [
            9,
            6,
            5,
            1
          ],
          "V": 11
        },
        "expectedOutput": 2,
        "isHidden": false
      },
      {
        "input": {
          "coins": [
            5,
            10
          ],
          "V": 3
        },
        "expectedOutput": -1,
        "isHidden": true
      },
      {
        "input": {
          "coins": [
            1,
            5,
            6,
            9
          ],
          "V": 11
        },
        "expectedOutput": 2,
        "isHidden": true
      },
      {
        "input": {
          "coins": [
            2
          ],
          "V": 0
        },
        "expectedOutput": 0,
        "isHidden": true
      },
      {
        "input": {
          "coins": [
            7,
            2,
            3,
            6
          ],
          "V": 13
        },
        "expectedOutput": 2,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} coins\n * @param {number} V\n * @return {number}\n */\nfunction minCoins(coins, V) {\n    // Write your solution here\n}",
      "python": "def minCoins(coins: list[int], V: int) -> int:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "coins = [25,10,5], V = 30",
        "output": "2",
        "expectedOutput": "2",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "coins = [9,6,5,1], V = 11",
        "output": "2",
        "expectedOutput": "2",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Remove Invalid Parentheses",
    "slug": "remove-invalid-parentheses",
    "difficulty": "Hard",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Backtracking",
    "subtopic": "DFS / Backtracking",
    "estimatedTimeMins": 45,
    "expectedComplexity": {
      "time": "O(2^N)",
      "space": "O(N)"
    },
    "description": "At {{companyName}}, the {{department}} code intelligence parser repairs malformed search filter expressions represented as a string s containing parentheses and alphanumeric tokens. As a {{roleTitle}} in {{domain}}, remove the minimum number of invalid parentheses to make the input string valid, and return all unique valid strings. You may return the answer in any order.",
    "functionName": "removeInvalidParentheses",
    "parameters": [
      {
        "name": "s",
        "type": "string"
      }
    ],
    "returnType": "string[]",
    "constraints": [
      "1 <= s.length <= 25",
      "s consists of lowercase letters and '(' and ')'",
      "At most 20 parentheses in s"
    ],
    "ioNote": "Compare as unordered sets of strings. expectedOutput is sorted alphabetically for convenience. If the input is already valid, return [s]; if only letters remain, the answer may be [\"\"].",
    "checker": "unordered",
    "testCases": [
      {
        "input": {
          "s": "()())()"
        },
        "expectedOutput": [
          "(())()",
          "()()()"
        ],
        "isHidden": false
      },
      {
        "input": {
          "s": "(a)())()"
        },
        "expectedOutput": [
          "(a())()",
          "(a)()()"
        ],
        "isHidden": false
      },
      {
        "input": {
          "s": ")("
        },
        "expectedOutput": [
          ""
        ],
        "isHidden": true
      },
      {
        "input": {
          "s": "abc"
        },
        "expectedOutput": [
          "abc"
        ],
        "isHidden": true
      },
      {
        "input": {
          "s": "((("
        },
        "expectedOutput": [
          ""
        ],
        "isHidden": true
      },
      {
        "input": {
          "s": "(a(b)c"
        },
        "expectedOutput": [
          "(ab)c",
          "a(b)c"
        ],
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {string} s\n * @return {string[]}\n */\nfunction removeInvalidParentheses(s) {\n    // Write your solution here\n}",
      "python": "def removeInvalidParentheses(s: str) -> list[str]:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "s = \"()())()\"",
        "output": "[\"(())()\",\"()()()\"]",
        "expectedOutput": "[\"(())()\",\"()()()\"]",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "s = \"(a)())()\"",
        "output": "[\"(a())()\",\"(a)()()\"]",
        "expectedOutput": "[\"(a())()\",\"(a)()()\"]",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Longest Increasing Subsequence",
    "slug": "longest-increasing-subsequence",
    "difficulty": "Medium",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Dynamic Programming",
    "subtopic": "DP / Binary Search",
    "estimatedTimeMins": 30,
    "expectedComplexity": {
      "time": "O(N log N)",
      "space": "O(N)"
    },
    "description": "At {{companyName}}, the {{department}} predictive scaling service analyzes daily compute demand metrics stored in an integer array nums. As a {{roleTitle}} in {{domain}}, return the length of the longest strictly increasing subsequence of workloads to project peak growth trajectories across {{location}}.\n\nA subsequence is an array derived from another array by deleting some or no elements without changing the order of the remaining elements.",
    "functionName": "lengthOfLIS",
    "parameters": [
      {
        "name": "nums",
        "type": "int[]"
      }
    ],
    "returnType": "int",
    "constraints": [
      "1 <= nums.length <= 2500",
      "-10000 <= nums[i] <= 10000"
    ],
    "testCases": [
      {
        "input": {
          "nums": [
            10,
            9,
            2,
            5,
            3,
            7,
            101,
            18
          ]
        },
        "expectedOutput": 4,
        "isHidden": false
      },
      {
        "input": {
          "nums": [
            0,
            1,
            0,
            3,
            2,
            3
          ]
        },
        "expectedOutput": 4,
        "isHidden": false
      },
      {
        "input": {
          "nums": [
            7,
            7,
            7,
            7
          ]
        },
        "expectedOutput": 1,
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            1
          ]
        },
        "expectedOutput": 1,
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            5,
            4,
            3,
            2,
            1
          ]
        },
        "expectedOutput": 1,
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            1,
            3,
            6,
            7,
            9,
            4,
            10,
            5,
            6
          ]
        },
        "expectedOutput": 6,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} nums\n * @return {number}\n */\nfunction lengthOfLIS(nums) {\n    // Write your solution here\n}",
      "python": "def lengthOfLIS(nums: list[int]) -> int:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "nums = [10,9,2,5,3,7,101,18]",
        "output": "4",
        "expectedOutput": "4",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "nums = [0,1,0,3,2,3]",
        "output": "4",
        "expectedOutput": "4",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Cheapest Flights Within K Stops",
    "slug": "cheapest-flights-within-k-stops",
    "difficulty": "Medium",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Graphs",
    "subtopic": "Shortest Path",
    "estimatedTimeMins": 30,
    "expectedComplexity": {
      "time": "O(E * K)",
      "space": "O(V)"
    },
    "description": "At {{companyName}}'s {{location}} supply chain nerve center, inter-facility transit routes connect n logistical nodes (numbered 0 to n - 1). Transit lanes are given as an array flights where flights[i] = [from, to, price]. As a {{roleTitle}} in {{domain}}, find the cheapest transit cost from src to dst with at most k intermediate stops. If no such route exists, return -1.",
    "functionName": "findCheapestPrice",
    "parameters": [
      {
        "name": "n",
        "type": "int"
      },
      {
        "name": "flights",
        "type": "int[][]"
      },
      {
        "name": "src",
        "type": "int"
      },
      {
        "name": "dst",
        "type": "int"
      },
      {
        "name": "k",
        "type": "int"
      }
    ],
    "returnType": "int",
    "constraints": [
      "1 <= n <= 100",
      "0 <= flights.length <= n * (n - 1) / 2",
      "flights[i].length == 3",
      "0 <= from, to < n, from != to",
      "1 <= price <= 10000",
      "0 <= src, dst, k < n, src != dst",
      "No duplicate flights between the same ordered pair of cities"
    ],
    "testCases": [
      {
        "input": {
          "n": 4,
          "flights": [
            [
              0,
              1,
              100
            ],
            [
              1,
              2,
              100
            ],
            [
              2,
              0,
              100
            ],
            [
              1,
              3,
              600
            ],
            [
              2,
              3,
              200
            ]
          ],
          "src": 0,
          "dst": 3,
          "k": 1
        },
        "expectedOutput": 700,
        "isHidden": false
      },
      {
        "input": {
          "n": 3,
          "flights": [
            [
              0,
              1,
              100
            ],
            [
              1,
              2,
              100
            ],
            [
              0,
              2,
              500
            ]
          ],
          "src": 0,
          "dst": 2,
          "k": 1
        },
        "expectedOutput": 200,
        "isHidden": false
      },
      {
        "input": {
          "n": 3,
          "flights": [
            [
              0,
              1,
              100
            ],
            [
              1,
              2,
              100
            ],
            [
              0,
              2,
              500
            ]
          ],
          "src": 0,
          "dst": 2,
          "k": 0
        },
        "expectedOutput": 500,
        "isHidden": true
      },
      {
        "input": {
          "n": 3,
          "flights": [
            [
              0,
              1,
              10
            ]
          ],
          "src": 0,
          "dst": 2,
          "k": 2
        },
        "expectedOutput": -1,
        "isHidden": true
      },
      {
        "input": {
          "n": 5,
          "flights": [
            [
              0,
              1,
              5
            ],
            [
              1,
              2,
              5
            ],
            [
              0,
              3,
              2
            ],
            [
              3,
              1,
              2
            ],
            [
              1,
              4,
              1
            ],
            [
              4,
              2,
              1
            ]
          ],
          "src": 0,
          "dst": 2,
          "k": 2
        },
        "expectedOutput": 7,
        "isHidden": true
      },
      {
        "input": {
          "n": 2,
          "flights": [
            [
              0,
              1,
              7
            ]
          ],
          "src": 0,
          "dst": 1,
          "k": 0
        },
        "expectedOutput": 7,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} n\n * @param {number[][]} flights\n * @param {number} src\n * @param {number} dst\n * @param {number} k\n * @return {number}\n */\nfunction findCheapestPrice(n, flights, src, dst, k) {\n    // Write your solution here\n}",
      "python": "def findCheapestPrice(n: int, flights: list[list[int]], src: int, dst: int, k: int) -> int:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1",
        "output": "700",
        "expectedOutput": "700",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1",
        "output": "200",
        "expectedOutput": "200",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Dijkstra's Shortest Path Algorithm",
    "slug": "dijkstras-shortest-path-algorithm",
    "difficulty": "Medium",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Graphs",
    "subtopic": "Shortest Path",
    "estimatedTimeMins": 30,
    "expectedComplexity": {
      "time": "O(E log V)",
      "space": "O(V)"
    },
    "description": "At {{companyName}}, the {{department}} routing engine coordinates dispatch between V network routers numbered 0 to V - 1. The network topology is represented as an adjacency list adj where adj[u] contains pairs [v, w], denoting a directed link from u to v with network latency w. As a {{roleTitle}} in {{domain}}, calculate the shortest latency path from a source gateway S to all other routers in the network.",
    "functionName": "dijkstra",
    "parameters": [
      {
        "name": "V",
        "type": "int"
      },
      {
        "name": "adj",
        "type": "List<List<int[]>>"
      },
      {
        "name": "S",
        "type": "int"
      }
    ],
    "returnType": "int[]",
    "constraints": [
      "1 <= V <= 1000",
      "0 <= S < V",
      "1 <= w <= 1000",
      "The graph is connected"
    ],
    "ioNote": "adj is a list of lists; adj[u] is a list of [v, w] pairs. For every edge (u,v,w) both directions are present in the adjacency list.",
    "testCases": [
      {
        "input": {
          "V": 3,
          "adj": [
            [
              [
                1,
                1
              ],
              [
                2,
                6
              ]
            ],
            [
              [
                0,
                1
              ],
              [
                2,
                3
              ]
            ],
            [
              [
                1,
                3
              ],
              [
                0,
                6
              ]
            ]
          ],
          "S": 2
        },
        "expectedOutput": [
          4,
          3,
          0
        ],
        "isHidden": false
      },
      {
        "input": {
          "V": 5,
          "adj": [
            [
              [
                1,
                4
              ],
              [
                2,
                1
              ]
            ],
            [
              [
                0,
                4
              ],
              [
                2,
                2
              ],
              [
                3,
                1
              ]
            ],
            [
              [
                0,
                1
              ],
              [
                1,
                2
              ],
              [
                3,
                5
              ]
            ],
            [
              [
                1,
                1
              ],
              [
                2,
                5
              ],
              [
                4,
                3
              ]
            ],
            [
              [
                3,
                3
              ]
            ]
          ],
          "S": 0
        },
        "expectedOutput": [
          0,
          3,
          1,
          4,
          7
        ],
        "isHidden": false
      },
      {
        "input": {
          "V": 1,
          "adj": [
            []
          ],
          "S": 0
        },
        "expectedOutput": [
          0
        ],
        "isHidden": true
      },
      {
        "input": {
          "V": 6,
          "adj": [
            [
              [
                1,
                7
              ],
              [
                2,
                9
              ],
              [
                5,
                14
              ]
            ],
            [
              [
                0,
                7
              ],
              [
                2,
                10
              ],
              [
                3,
                15
              ]
            ],
            [
              [
                0,
                9
              ],
              [
                1,
                10
              ],
              [
                3,
                11
              ],
              [
                5,
                2
              ]
            ],
            [
              [
                1,
                15
              ],
              [
                2,
                11
              ],
              [
                4,
                6
              ]
            ],
            [
              [
                3,
                6
              ],
              [
                5,
                9
              ]
            ],
            [
              [
                0,
                14
              ],
              [
                2,
                2
              ],
              [
                4,
                9
              ]
            ]
          ],
          "S": 0
        },
        "expectedOutput": [
          0,
          7,
          9,
          20,
          20,
          11
        ],
        "isHidden": true
      },
      {
        "input": {
          "V": 4,
          "adj": [
            [
              [
                1,
                1
              ],
              [
                3,
                10
              ]
            ],
            [
              [
                0,
                1
              ],
              [
                2,
                1
              ]
            ],
            [
              [
                1,
                1
              ],
              [
                3,
                1
              ]
            ],
            [
              [
                2,
                1
              ],
              [
                0,
                10
              ]
            ]
          ],
          "S": 3
        },
        "expectedOutput": [
          3,
          2,
          1,
          0
        ],
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} V\n * @param {List<List<int[]>>} adj\n * @param {number} S\n * @return {number[]}\n */\nfunction dijkstra(V, adj, S) {\n    // Write your solution here\n}",
      "python": "def dijkstra(V: int, adj: List<List<int[]>>, S: int) -> list[int]:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "V = 3, adj = [[[1,1],[2,6]],[[0,1],[2,3]],[[1,3],[0,6]]], S = 2",
        "output": "[4,3,0]",
        "expectedOutput": "[4,3,0]",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "V = 5, adj = [[[1,4],[2,1]],[[0,4],[2,2],[3,1]],[[0,1],[1,2],[3,5]],[[1,1],[2,5],[4,3]],[[3,3]]], S = 0",
        "output": "[0,3,1,4,7]",
        "expectedOutput": "[0,3,1,4,7]",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Swim In Rising Water",
    "slug": "swim-in-rising-water",
    "difficulty": "Hard",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Graphs",
    "subtopic": "Binary Search / DFS",
    "estimatedTimeMins": 45,
    "expectedComplexity": {
      "time": "O(N^2 log N)",
      "space": "O(N^2)"
    },
    "description": "At {{companyName}}'s {{location}} automated distribution center, goods are moved across an n x n grid where grid[i][j] represents the clearance elevation of platform cell (i, j). During a maintenance event, the platform elevation threshold rises uniformly over time t. As a {{roleTitle}} in {{domain}}, find the minimum time t required to traverse from top-left (0, 0) to bottom-right (n - 1, n - 1).",
    "functionName": "swimInWater",
    "parameters": [
      {
        "name": "grid",
        "type": "int[][]"
      }
    ],
    "returnType": "int",
    "constraints": [
      "n == grid.length == grid[i].length",
      "1 <= n <= 50",
      "0 <= grid[i][j] < n * n",
      "All values in grid are unique"
    ],
    "testCases": [
      {
        "input": {
          "grid": [
            [
              0,
              2
            ],
            [
              1,
              3
            ]
          ]
        },
        "expectedOutput": 3,
        "isHidden": false
      },
      {
        "input": {
          "grid": [
            [
              0,
              1,
              2,
              3,
              4
            ],
            [
              24,
              23,
              22,
              21,
              5
            ],
            [
              12,
              13,
              14,
              15,
              16
            ],
            [
              11,
              17,
              18,
              19,
              20
            ],
            [
              10,
              9,
              8,
              7,
              6
            ]
          ]
        },
        "expectedOutput": 16,
        "isHidden": false
      },
      {
        "input": {
          "grid": [
            [
              0
            ]
          ]
        },
        "expectedOutput": 0,
        "isHidden": true
      },
      {
        "input": {
          "grid": [
            [
              3,
              2
            ],
            [
              0,
              1
            ]
          ]
        },
        "expectedOutput": 3,
        "isHidden": true
      },
      {
        "input": {
          "grid": [
            [
              0,
              1,
              2
            ],
            [
              5,
              4,
              3
            ],
            [
              6,
              7,
              8
            ]
          ]
        },
        "expectedOutput": 8,
        "isHidden": true
      },
      {
        "input": {
          "grid": [
            [
              7,
              1,
              9
            ],
            [
              3,
              8,
              4
            ],
            [
              2,
              5,
              6
            ]
          ]
        },
        "expectedOutput": 7,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[][]} grid\n * @return {number}\n */\nfunction swimInWater(grid) {\n    // Write your solution here\n}",
      "python": "def swimInWater(grid: list[list[int]]) -> int:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "grid = [[0,2],[1,3]]",
        "output": "3",
        "expectedOutput": "3",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]",
        "output": "16",
        "expectedOutput": "16",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Topological Sort",
    "slug": "topological-sort",
    "difficulty": "Medium",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Graphs",
    "subtopic": "Kahn's Algorithm / DFS",
    "estimatedTimeMins": 30,
    "expectedComplexity": {
      "time": "O(V + E)",
      "space": "O(V)"
    },
    "description": "At {{companyName}}, the {{department}} task orchestration framework executes V build and deployment jobs numbered 0 to V - 1. The directed graph adj represents job dependencies, where an edge u -> v signifies that job u must complete before job v can begin. As a {{roleTitle}} in {{domain}}, produce a valid topological ordering of tasks that satisfies all execution constraints.",
    "functionName": "topologicalSort",
    "parameters": [
      {
        "name": "V",
        "type": "int"
      },
      {
        "name": "adj",
        "type": "List<List<Integer>>"
      }
    ],
    "returnType": "int[]",
    "constraints": [
      "1 <= V <= 10000",
      "The graph is a directed acyclic graph"
    ],
    "ioNote": "Multiple valid answers exist. Grade with a checker that verifies the returned array is a permutation of 0..V-1 and that for every edge u -> v, u appears before v. expectedOutput is one valid answer (Kahn's BFS order).",
    "checker": "topological",
    "testCases": [
      {
        "input": {
          "V": 4,
          "adj": [
            [
              1
            ],
            [
              2
            ],
            [],
            [
              1,
              2
            ]
          ]
        },
        "expectedOutput": [
          0,
          3,
          1,
          2
        ],
        "isHidden": false
      },
      {
        "input": {
          "V": 6,
          "adj": [
            [],
            [],
            [
              3
            ],
            [
              1
            ],
            [
              0,
              1
            ],
            [
              2,
              0
            ]
          ]
        },
        "expectedOutput": [
          4,
          5,
          2,
          0,
          3,
          1
        ],
        "isHidden": false
      },
      {
        "input": {
          "V": 1,
          "adj": [
            []
          ]
        },
        "expectedOutput": [
          0
        ],
        "isHidden": true
      },
      {
        "input": {
          "V": 3,
          "adj": [
            [],
            [],
            []
          ]
        },
        "expectedOutput": [
          0,
          1,
          2
        ],
        "isHidden": true
      },
      {
        "input": {
          "V": 5,
          "adj": [
            [
              1,
              2
            ],
            [
              3
            ],
            [
              3
            ],
            [
              4
            ],
            []
          ]
        },
        "expectedOutput": [
          0,
          1,
          2,
          3,
          4
        ],
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} V\n * @param {List<List<Integer>>} adj\n * @return {number[]}\n */\nfunction topologicalSort(V, adj) {\n    // Write your solution here\n}",
      "python": "def topologicalSort(V: int, adj: List<List<Integer>>) -> list[int]:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "V = 4, adj = [[1],[2],[],[1,2]]",
        "output": "[0,3,1,2]",
        "expectedOutput": "[0,3,1,2]",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "V = 6, adj = [[],[],[3],[1],[0,1],[2,0]]",
        "output": "[4,5,2,0,3,1]",
        "expectedOutput": "[4,5,2,0,3,1]",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Word Ladder",
    "slug": "word-ladder",
    "difficulty": "Hard",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Graphs",
    "subtopic": "BFS",
    "estimatedTimeMins": 45,
    "expectedComplexity": {
      "time": "O(M^2 * N)",
      "space": "O(M^2 * N)"
    },
    "description": "At {{companyName}}, the {{department}} natural language processing service builds recommendation bridges between user query keywords. A transformation sequence from beginWord to endWord using a catalog wordList is a sequence where each adjacent pair differs by exactly one character, and every intermediate word is in wordList. As a {{roleTitle}} in {{domain}}, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.",
    "functionName": "ladderLength",
    "parameters": [
      {
        "name": "beginWord",
        "type": "string"
      },
      {
        "name": "endWord",
        "type": "string"
      },
      {
        "name": "wordList",
        "type": "string[]"
      }
    ],
    "returnType": "int",
    "constraints": [
      "1 <= beginWord.length <= 10",
      "endWord.length == beginWord.length",
      "1 <= wordList.length <= 5000",
      "All words have the same length and contain only lowercase English letters",
      "beginWord != endWord",
      "All words in wordList are unique"
    ],
    "testCases": [
      {
        "input": {
          "beginWord": "hit",
          "endWord": "cog",
          "wordList": [
            "hot",
            "dot",
            "dog",
            "lot",
            "log",
            "cog"
          ]
        },
        "expectedOutput": 5,
        "isHidden": false
      },
      {
        "input": {
          "beginWord": "hit",
          "endWord": "cog",
          "wordList": [
            "hot",
            "dot",
            "dog",
            "lot",
            "log"
          ]
        },
        "expectedOutput": 0,
        "isHidden": false
      },
      {
        "input": {
          "beginWord": "a",
          "endWord": "c",
          "wordList": [
            "a",
            "b",
            "c"
          ]
        },
        "expectedOutput": 2,
        "isHidden": true
      },
      {
        "input": {
          "beginWord": "lost",
          "endWord": "cost",
          "wordList": [
            "most",
            "fist",
            "lost",
            "cost",
            "fish"
          ]
        },
        "expectedOutput": 2,
        "isHidden": true
      },
      {
        "input": {
          "beginWord": "cat",
          "endWord": "dog",
          "wordList": [
            "cot",
            "cog",
            "dog",
            "dot"
          ]
        },
        "expectedOutput": 4,
        "isHidden": true
      },
      {
        "input": {
          "beginWord": "red",
          "endWord": "tax",
          "wordList": [
            "ted",
            "tex",
            "red",
            "tax",
            "tad",
            "den",
            "rex",
            "pee"
          ]
        },
        "expectedOutput": 4,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {string} beginWord\n * @param {string} endWord\n * @param {string[]} wordList\n * @return {number}\n */\nfunction ladderLength(beginWord, endWord, wordList) {\n    // Write your solution here\n}",
      "python": "def ladderLength(beginWord: str, endWord: str, wordList: list[str]) -> int:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
        "output": "5",
        "expectedOutput": "5",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
        "output": "0",
        "expectedOutput": "0",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Count Number of Bits to be Flipped",
    "slug": "count-number-of-bits-to-be-flipped",
    "difficulty": "Easy",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Bit Manipulation",
    "subtopic": "XOR",
    "estimatedTimeMins": 20,
    "expectedComplexity": {
      "time": "O(log N)",
      "space": "O(1)"
    },
    "description": "At {{companyName}}, the {{department}} hardware telemetry module reads register bitmasks A and B from IoT devices deployed across {{location}}. As a {{roleTitle}} in {{domain}}, determine the number of bit flips required to convert register state A into target state B.",
    "functionName": "countBitsFlip",
    "parameters": [
      {
        "name": "A",
        "type": "int"
      },
      {
        "name": "B",
        "type": "int"
      }
    ],
    "returnType": "int",
    "constraints": [
      "0 <= A, B <= 2147483647"
    ],
    "testCases": [
      {
        "input": {
          "A": 10,
          "B": 20
        },
        "expectedOutput": 4,
        "isHidden": false
      },
      {
        "input": {
          "A": 20,
          "B": 25
        },
        "expectedOutput": 3,
        "isHidden": false
      },
      {
        "input": {
          "A": 0,
          "B": 0
        },
        "expectedOutput": 0,
        "isHidden": true
      },
      {
        "input": {
          "A": 7,
          "B": 8
        },
        "expectedOutput": 4,
        "isHidden": true
      },
      {
        "input": {
          "A": 1,
          "B": 2147483647
        },
        "expectedOutput": 30,
        "isHidden": true
      },
      {
        "input": {
          "A": 255,
          "B": 0
        },
        "expectedOutput": 8,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} A\n * @param {number} B\n * @return {number}\n */\nfunction countBitsFlip(A, B) {\n    // Write your solution here\n}",
      "python": "def countBitsFlip(A: int, B: int) -> int:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "A = 10, B = 20",
        "output": "4",
        "expectedOutput": "4",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "A = 20, B = 25",
        "output": "3",
        "expectedOutput": "3",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Aggressive Cows",
    "slug": "aggressive-cows",
    "difficulty": "Medium",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Searching & Sorting",
    "subtopic": "Binary Search on Answer",
    "estimatedTimeMins": 30,
    "expectedComplexity": {
      "time": "O(N log N)",
      "space": "O(1)"
    },
    "description": "At {{companyName}}'s {{location}} warehouse storage park, n docking bays are aligned along a straight corridor with coordinates given in stalls. To minimize radio interference, k high-power robotic transports must be allocated to distinct bays such that the minimum distance between any two transports is as large as possible. As a {{roleTitle}} in {{domain}}, find this largest minimum distance.",
    "functionName": "solve",
    "parameters": [
      {
        "name": "n",
        "type": "int"
      },
      {
        "name": "k",
        "type": "int"
      },
      {
        "name": "stalls",
        "type": "int[]"
      }
    ],
    "returnType": "int",
    "constraints": [
      "2 <= k <= n <= 100000",
      "0 <= stalls[i] <= 1000000000",
      "All stall positions are distinct (in tests)"
    ],
    "testCases": [
      {
        "input": {
          "n": 5,
          "k": 3,
          "stalls": [
            1,
            2,
            4,
            8,
            9
          ]
        },
        "expectedOutput": 3,
        "isHidden": false
      },
      {
        "input": {
          "n": 5,
          "k": 2,
          "stalls": [
            1,
            2,
            8,
            4,
            9
          ]
        },
        "expectedOutput": 8,
        "isHidden": false
      },
      {
        "input": {
          "n": 2,
          "k": 2,
          "stalls": [
            5,
            1
          ]
        },
        "expectedOutput": 4,
        "isHidden": true
      },
      {
        "input": {
          "n": 6,
          "k": 4,
          "stalls": [
            0,
            3,
            4,
            7,
            10,
            9
          ]
        },
        "expectedOutput": 3,
        "isHidden": true
      },
      {
        "input": {
          "n": 4,
          "k": 4,
          "stalls": [
            1,
            2,
            3,
            4
          ]
        },
        "expectedOutput": 1,
        "isHidden": true
      },
      {
        "input": {
          "n": 3,
          "k": 2,
          "stalls": [
            1,
            1000000000,
            500
          ]
        },
        "expectedOutput": 999999999,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} n\n * @param {number} k\n * @param {number[]} stalls\n * @return {number}\n */\nfunction solve(n, k, stalls) {\n    // Write your solution here\n}",
      "python": "def solve(n: int, k: int, stalls: list[int]) -> int:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "n = 5, k = 3, stalls = [1,2,4,8,9]",
        "output": "3",
        "expectedOutput": "3",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "n = 5, k = 2, stalls = [1,2,8,4,9]",
        "output": "8",
        "expectedOutput": "8",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Binary Search",
    "slug": "binary-search",
    "difficulty": "Easy",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Searching & Sorting",
    "subtopic": "Binary Search",
    "estimatedTimeMins": 20,
    "expectedComplexity": {
      "time": "O(log N)",
      "space": "O(1)"
    },
    "description": "At {{companyName}}, the {{department}} indexing subsystem stores sorted unique user IDs in an array nums in ascending order. When an incoming lookup request arrives with a target ID, as a {{roleTitle}} in {{domain}}, search for target in nums. If target exists, return its index; otherwise, return -1. You must write an algorithm with O(log n) runtime complexity.",
    "functionName": "search",
    "parameters": [
      {
        "name": "nums",
        "type": "int[]"
      },
      {
        "name": "target",
        "type": "int"
      }
    ],
    "returnType": "int",
    "constraints": [
      "1 <= nums.length <= 10000",
      "-10000 <= nums[i], target <= 10000",
      "All values in nums are unique and sorted ascending"
    ],
    "testCases": [
      {
        "input": {
          "nums": [
            -1,
            0,
            3,
            5,
            9,
            12
          ],
          "target": 9
        },
        "expectedOutput": 4,
        "isHidden": false
      },
      {
        "input": {
          "nums": [
            -1,
            0,
            3,
            5,
            9,
            12
          ],
          "target": 2
        },
        "expectedOutput": -1,
        "isHidden": false
      },
      {
        "input": {
          "nums": [
            5
          ],
          "target": 5
        },
        "expectedOutput": 0,
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            5
          ],
          "target": -5
        },
        "expectedOutput": -1,
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            1,
            3,
            5,
            7,
            9,
            11,
            13
          ],
          "target": 1
        },
        "expectedOutput": 0,
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            1,
            3,
            5,
            7,
            9,
            11,
            13
          ],
          "target": 13
        },
        "expectedOutput": 6,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number}\n */\nfunction search(nums, target) {\n    // Write your solution here\n}",
      "python": "def search(nums: list[int], target: int) -> int:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "nums = [-1,0,3,5,9,12], target = 9",
        "output": "4",
        "expectedOutput": "4",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "nums = [-1,0,3,5,9,12], target = 2",
        "output": "-1",
        "expectedOutput": "-1",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Painter's Partition Problem",
    "slug": "painters-partition-problem",
    "difficulty": "Hard",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Searching & Sorting",
    "subtopic": "Binary Search on Answer",
    "estimatedTimeMins": 45,
    "expectedComplexity": {
      "time": "O(N log(sum))",
      "space": "O(1)"
    },
    "description": "At {{companyName}}'s {{location}} maintenance wing, n facility partitions with lengths given in the array boards must be refurbished by k certified contractors. Each contractor takes 1 unit of time to refurbish 1 unit of board length, and each contractor can only work on a contiguous set of boards. As a {{roleTitle}} in {{domain}}, find the minimum time required to refurbish all boards.",
    "functionName": "minTimeToPaint",
    "parameters": [
      {
        "name": "boards",
        "type": "int[]"
      },
      {
        "name": "k",
        "type": "int"
      }
    ],
    "returnType": "int",
    "constraints": [
      "1 <= boards.length <= 100000",
      "1 <= k <= boards.length",
      "1 <= boards[i] <= 10000"
    ],
    "testCases": [
      {
        "input": {
          "boards": [
            10,
            20,
            30,
            40
          ],
          "k": 2
        },
        "expectedOutput": 60,
        "isHidden": false
      },
      {
        "input": {
          "boards": [
            5,
            10,
            30,
            20,
            15
          ],
          "k": 3
        },
        "expectedOutput": 35,
        "isHidden": false
      },
      {
        "input": {
          "boards": [
            7
          ],
          "k": 1
        },
        "expectedOutput": 7,
        "isHidden": true
      },
      {
        "input": {
          "boards": [
            1,
            2,
            3,
            4,
            5
          ],
          "k": 5
        },
        "expectedOutput": 5,
        "isHidden": true
      },
      {
        "input": {
          "boards": [
            10,
            10,
            10,
            10
          ],
          "k": 1
        },
        "expectedOutput": 40,
        "isHidden": true
      },
      {
        "input": {
          "boards": [
            100,
            200,
            300,
            400
          ],
          "k": 2
        },
        "expectedOutput": 600,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} boards\n * @param {number} k\n * @return {number}\n */\nfunction minTimeToPaint(boards, k) {\n    // Write your solution here\n}",
      "python": "def minTimeToPaint(boards: list[int], k: int) -> int:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "boards = [10,20,30,40], k = 2",
        "output": "60",
        "expectedOutput": "60",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "boards = [5,10,30,20,15], k = 3",
        "output": "35",
        "expectedOutput": "35",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Split Array Largest Sum",
    "slug": "split-array-largest-sum",
    "difficulty": "Hard",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Searching & Sorting",
    "subtopic": "Binary Search on Answer",
    "estimatedTimeMins": 45,
    "expectedComplexity": {
      "time": "O(N log(sum))",
      "space": "O(1)"
    },
    "description": "At {{companyName}}, the {{department}} batch processing system divides a sequence of data job payloads nums into k non-empty contiguous batches to balance worker node allocations in {{location}}. As a {{roleTitle}} in {{domain}}, minimize the maximum workload sum among these k batches, and return that minimized largest batch sum.",
    "functionName": "splitArray",
    "parameters": [
      {
        "name": "nums",
        "type": "int[]"
      },
      {
        "name": "k",
        "type": "int"
      }
    ],
    "returnType": "int",
    "constraints": [
      "1 <= nums.length <= 1000",
      "0 <= nums[i] <= 1000000",
      "1 <= k <= min(50, nums.length)"
    ],
    "testCases": [
      {
        "input": {
          "nums": [
            7,
            2,
            5,
            10,
            8
          ],
          "k": 2
        },
        "expectedOutput": 18,
        "isHidden": false
      },
      {
        "input": {
          "nums": [
            1,
            2,
            3,
            4,
            5
          ],
          "k": 2
        },
        "expectedOutput": 9,
        "isHidden": false
      },
      {
        "input": {
          "nums": [
            1,
            4,
            4
          ],
          "k": 3
        },
        "expectedOutput": 4,
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            5
          ],
          "k": 1
        },
        "expectedOutput": 5,
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            2,
            3,
            1,
            2,
            4,
            3
          ],
          "k": 3
        },
        "expectedOutput": 6,
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            10,
            5,
            13,
            4,
            8,
            4,
            5,
            11,
            14,
            9,
            16,
            10,
            20,
            8
          ],
          "k": 8
        },
        "expectedOutput": 25,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number}\n */\nfunction splitArray(nums, k) {\n    // Write your solution here\n}",
      "python": "def splitArray(nums: list[int], k: int) -> int:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "nums = [7,2,5,10,8], k = 2",
        "output": "18",
        "expectedOutput": "18",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "nums = [1,2,3,4,5], k = 2",
        "output": "9",
        "expectedOutput": "9",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Chocolate Distribution Problem",
    "slug": "chocolate-distribution-problem",
    "difficulty": "Easy",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Arrays",
    "subtopic": "Sorting",
    "estimatedTimeMins": 20,
    "expectedComplexity": {
      "time": "O(N log N)",
      "space": "O(1)"
    },
    "description": "At {{companyName}}'s {{location}} talent operations center, n resource bonus packages containing units given in array a must be distributed among m department interns such that each intern receives exactly one package, and the difference between the maximum and minimum units received is minimized. As a {{roleTitle}} in {{domain}}, compute this minimum difference.",
    "functionName": "findMinDiff",
    "parameters": [
      {
        "name": "a",
        "type": "int[]"
      },
      {
        "name": "n",
        "type": "int"
      },
      {
        "name": "m",
        "type": "int"
      }
    ],
    "returnType": "int",
    "constraints": [
      "1 <= m <= n <= 100000 (m > n is handled by returning -1)",
      "1 <= a[i] <= 1000000000"
    ],
    "testCases": [
      {
        "input": {
          "a": [
            7,
            3,
            2,
            4,
            9,
            12,
            56
          ],
          "n": 7,
          "m": 3
        },
        "expectedOutput": 2,
        "isHidden": false
      },
      {
        "input": {
          "a": [
            3,
            4,
            1,
            9,
            56,
            7,
            9,
            12
          ],
          "n": 8,
          "m": 5
        },
        "expectedOutput": 6,
        "isHidden": false
      },
      {
        "input": {
          "a": [
            5
          ],
          "n": 1,
          "m": 1
        },
        "expectedOutput": 0,
        "isHidden": true
      },
      {
        "input": {
          "a": [
            1,
            2,
            3
          ],
          "n": 3,
          "m": 5
        },
        "expectedOutput": -1,
        "isHidden": true
      },
      {
        "input": {
          "a": [
            10,
            10,
            10,
            10
          ],
          "n": 4,
          "m": 2
        },
        "expectedOutput": 0,
        "isHidden": true
      },
      {
        "input": {
          "a": [
            12,
            4,
            7,
            9,
            2,
            23,
            25,
            41,
            30,
            40,
            28,
            42,
            30,
            44,
            48,
            43,
            50
          ],
          "n": 17,
          "m": 7
        },
        "expectedOutput": 10,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} a\n * @param {number} n\n * @param {number} m\n * @return {number}\n */\nfunction findMinDiff(a, n, m) {\n    // Write your solution here\n}",
      "python": "def findMinDiff(a: list[int], n: int, m: int) -> int:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "a = [7,3,2,4,9,12,56], n = 7, m = 3",
        "output": "2",
        "expectedOutput": "2",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "a = [3,4,1,9,56,7,9,12], n = 8, m = 5",
        "output": "6",
        "expectedOutput": "6",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Find Minimum in Rotated Sorted Array",
    "slug": "find-minimum-in-rotated-sorted-array",
    "difficulty": "Medium",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Arrays",
    "subtopic": "Binary Search",
    "estimatedTimeMins": 30,
    "expectedComplexity": {
      "time": "O(log N)",
      "space": "O(1)"
    },
    "description": "At {{companyName}}, the {{department}} circular telemetry log contains n unique elements sorted in ascending order, but rotated between 1 and n times across {{location}}. As a {{roleTitle}} in {{domain}}, find the minimum element in this rotated sorted array nums in O(log n) time.",
    "functionName": "findMin",
    "parameters": [
      {
        "name": "nums",
        "type": "int[]"
      }
    ],
    "returnType": "int",
    "constraints": [
      "1 <= nums.length <= 5000",
      "-5000 <= nums[i] <= 5000",
      "All values are unique",
      "nums is sorted ascending, then rotated between 1 and n times"
    ],
    "testCases": [
      {
        "input": {
          "nums": [
            3,
            4,
            5,
            1,
            2
          ]
        },
        "expectedOutput": 1,
        "isHidden": false
      },
      {
        "input": {
          "nums": [
            4,
            5,
            6,
            7,
            0,
            1,
            2
          ]
        },
        "expectedOutput": 0,
        "isHidden": false
      },
      {
        "input": {
          "nums": [
            11,
            13,
            15,
            17
          ]
        },
        "expectedOutput": 11,
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            2,
            1
          ]
        },
        "expectedOutput": 1,
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            1
          ]
        },
        "expectedOutput": 1,
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            5,
            6,
            7,
            8,
            9,
            1,
            2,
            3
          ]
        },
        "expectedOutput": 1,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} nums\n * @return {number}\n */\nfunction findMin(nums) {\n    // Write your solution here\n}",
      "python": "def findMin(nums: list[int]) -> int:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "nums = [3,4,5,1,2]",
        "output": "1",
        "expectedOutput": "1",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "nums = [4,5,6,7,0,1,2]",
        "output": "0",
        "expectedOutput": "0",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Contains Duplicate",
    "slug": "contains-duplicate",
    "difficulty": "Easy",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Arrays & Hashing",
    "subtopic": "Contains Duplicate",
    "estimatedTimeMins": 20,
    "expectedComplexity": {
      "time": "O(N)",
      "space": "O(N)"
    },
    "description": "At {{companyName}}, the {{department}} authentication firewall inspects session tokens in an array nums arriving from client endpoints. As a {{roleTitle}} in {{domain}}, return true if any token value appears at least twice in the array, and return false if every element is distinct.",
    "functionName": "hasDuplicate",
    "parameters": [
      {
        "name": "nums",
        "type": "int[]"
      }
    ],
    "returnType": "boolean",
    "constraints": [
      "1 <= nums.length <= 100000",
      "-1000000000 <= nums[i] <= 1000000000"
    ],
    "testCases": [
      {
        "input": {
          "nums": [
            1,
            2,
            3,
            1
          ]
        },
        "expectedOutput": true,
        "isHidden": false
      },
      {
        "input": {
          "nums": [
            1,
            2,
            3,
            4
          ]
        },
        "expectedOutput": false,
        "isHidden": false
      },
      {
        "input": {
          "nums": [
            1
          ]
        },
        "expectedOutput": false,
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            1,
            1,
            1,
            3,
            3,
            4,
            3,
            2,
            4,
            2
          ]
        },
        "expectedOutput": true,
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            -1,
            0,
            1,
            -1
          ]
        },
        "expectedOutput": true,
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            1000000000,
            -1000000000
          ]
        },
        "expectedOutput": false,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} nums\n * @return {boolean}\n */\nfunction hasDuplicate(nums) {\n    // Write your solution here\n}",
      "python": "def hasDuplicate(nums: list[int]) -> bool:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "nums = [1,2,3,1]",
        "output": "true",
        "expectedOutput": "true",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "nums = [1,2,3,4]",
        "output": "false",
        "expectedOutput": "false",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Reverse Linked List",
    "slug": "reverse-linked-list",
    "difficulty": "Easy",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Linked List",
    "subtopic": "Linked List Manipulation",
    "estimatedTimeMins": 20,
    "expectedComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "description": "At {{companyName}}, the {{department}} asynchronous workflow engine processes sequentially chained task nodes represented as a singly linked list with head pointer head. To support rollback procedures in {{location}}, as a {{roleTitle}} in {{domain}}, reverse the list in place and return the new head.",
    "functionName": "reverseList",
    "parameters": [
      {
        "name": "head",
        "type": "ListNode"
      }
    ],
    "returnType": "ListNode",
    "constraints": [
      "0 <= number of nodes <= 5000",
      "-5000 <= Node.val <= 5000"
    ],
    "ioNote": "Linked lists are given as arrays of node values in order (empty array = empty list). The output is likewise an array.",
    "testCases": [
      {
        "input": {
          "head": [
            1,
            2,
            3,
            4,
            5
          ]
        },
        "expectedOutput": [
          5,
          4,
          3,
          2,
          1
        ],
        "isHidden": false
      },
      {
        "input": {
          "head": [
            1,
            2
          ]
        },
        "expectedOutput": [
          2,
          1
        ],
        "isHidden": false
      },
      {
        "input": {
          "head": []
        },
        "expectedOutput": [],
        "isHidden": true
      },
      {
        "input": {
          "head": [
            7
          ]
        },
        "expectedOutput": [
          7
        ],
        "isHidden": true
      },
      {
        "input": {
          "head": [
            9,
            8,
            7,
            6
          ]
        },
        "expectedOutput": [
          6,
          7,
          8,
          9
        ],
        "isHidden": true
      },
      {
        "input": {
          "head": [
            -1,
            0,
            -1
          ]
        },
        "expectedOutput": [
          -1,
          0,
          -1
        ],
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nfunction reverseList(head) {\n    // Write your solution here\n}",
      "python": "def reverseList(head: Optional[ListNode]) -> Optional[ListNode]:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "head = [1,2,3,4,5]",
        "output": "[5,4,3,2,1]",
        "expectedOutput": "[5,4,3,2,1]",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "head = [1,2]",
        "output": "[2,1]",
        "expectedOutput": "[2,1]",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Merge Two Sorted Lists",
    "slug": "merge-two-sorted-lists",
    "difficulty": "Easy",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Linked List",
    "subtopic": "Two Pointers",
    "estimatedTimeMins": 20,
    "expectedComplexity": {
      "time": "O(N + M)",
      "space": "O(1)"
    },
    "description": "At {{companyName}}, the {{department}} order fulfillment service merges two pre-sorted incoming order queues represented as singly linked lists list1 and list2. As a {{roleTitle}} in {{domain}}, merge the two lists into one sorted linked list by splicing together the nodes of the first two lists, and return the head of the merged linked list.",
    "functionName": "mergeTwoLists",
    "parameters": [
      {
        "name": "list1",
        "type": "ListNode"
      },
      {
        "name": "list2",
        "type": "ListNode"
      }
    ],
    "returnType": "ListNode",
    "constraints": [
      "0 <= length of each list <= 50",
      "-100 <= Node.val <= 100",
      "Both lists are sorted in non-decreasing order"
    ],
    "ioNote": "Linked lists are given as arrays of node values in order (empty array = empty list). The output is likewise an array.",
    "testCases": [
      {
        "input": {
          "list1": [
            1,
            2,
            4
          ],
          "list2": [
            1,
            3,
            4
          ]
        },
        "expectedOutput": [
          1,
          1,
          2,
          3,
          4,
          4
        ],
        "isHidden": false
      },
      {
        "input": {
          "list1": [],
          "list2": []
        },
        "expectedOutput": [],
        "isHidden": false
      },
      {
        "input": {
          "list1": [],
          "list2": [
            0
          ]
        },
        "expectedOutput": [
          0
        ],
        "isHidden": true
      },
      {
        "input": {
          "list1": [
            5
          ],
          "list2": [
            1,
            2,
            3
          ]
        },
        "expectedOutput": [
          1,
          2,
          3,
          5
        ],
        "isHidden": true
      },
      {
        "input": {
          "list1": [
            1,
            3,
            5,
            7
          ],
          "list2": [
            2,
            4,
            6,
            8
          ]
        },
        "expectedOutput": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8
        ],
        "isHidden": true
      },
      {
        "input": {
          "list1": [
            -3,
            -1
          ],
          "list2": [
            -2,
            0,
            2
          ]
        },
        "expectedOutput": [
          -3,
          -2,
          -1,
          0,
          2
        ],
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {ListNode} list1\n * @param {ListNode} list2\n * @return {ListNode}\n */\nfunction mergeTwoLists(list1, list2) {\n    // Write your solution here\n}",
      "python": "def mergeTwoLists(list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "list1 = [1,2,4], list2 = [1,3,4]",
        "output": "[1,1,2,3,4,4]",
        "expectedOutput": "[1,1,2,3,4,4]",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "list1 = [], list2 = []",
        "output": "[]",
        "expectedOutput": "[]",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Linked List Cycle",
    "slug": "linked-list-cycle",
    "difficulty": "Easy",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Linked List",
    "subtopic": "Fast & Slow Pointers",
    "estimatedTimeMins": 20,
    "expectedComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "description": "At {{companyName}}, the {{department}} pipeline watchdog inspects distributed state machine pointers represented as a singly linked list starting at head. If a misconfigured step transitions into an infinite cyclic loop, worker threads freeze. As a {{roleTitle}} in {{domain}}, determine if the linked list has a cycle in it.",
    "functionName": "hasCycle",
    "parameters": [
      {
        "name": "head",
        "type": "ListNode"
      }
    ],
    "returnType": "boolean",
    "constraints": [
      "0 <= number of nodes <= 10000",
      "-100000 <= Node.val <= 100000"
    ],
    "ioNote": "Test input: 'head' is the array of node values and 'pos' is the index of the node that the last node's next pointer connects to (-1 means no cycle). pos is only used to build the list and is not passed to your function.",
    "testCases": [
      {
        "input": {
          "head": [
            3,
            2,
            0,
            -4
          ],
          "pos": 1
        },
        "expectedOutput": true,
        "isHidden": false
      },
      {
        "input": {
          "head": [
            1,
            2
          ],
          "pos": 0
        },
        "expectedOutput": true,
        "isHidden": false
      },
      {
        "input": {
          "head": [
            1
          ],
          "pos": -1
        },
        "expectedOutput": false,
        "isHidden": true
      },
      {
        "input": {
          "head": [
            1,
            2,
            3,
            4,
            5
          ],
          "pos": -1
        },
        "expectedOutput": false,
        "isHidden": true
      },
      {
        "input": {
          "head": [
            1,
            2,
            3,
            4,
            5
          ],
          "pos": 4
        },
        "expectedOutput": true,
        "isHidden": true
      },
      {
        "input": {
          "head": [],
          "pos": -1
        },
        "expectedOutput": false,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {ListNode} head\n * @return {boolean}\n */\nfunction hasCycle(head) {\n    // Write your solution here\n}",
      "python": "def hasCycle(head: Optional[ListNode]) -> bool:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "head = [3,2,0,-4], pos = 1",
        "output": "true",
        "expectedOutput": "true",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "head = [1,2], pos = 0",
        "output": "true",
        "expectedOutput": "true",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Middle of the Linked List",
    "slug": "middle-of-the-linked-list",
    "difficulty": "Easy",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Linked List",
    "subtopic": "Fast & Slow Pointers",
    "estimatedTimeMins": 20,
    "expectedComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "description": "At {{companyName}}, the {{department}} streaming buffer stores data frames as a singly linked list with head pointer head. To partition processing between two parallel consumer threads, as a {{roleTitle}} in {{domain}}, find the middle node of the linked list. If there are two middle nodes, return the second middle node.",
    "functionName": "middleNode",
    "parameters": [
      {
        "name": "head",
        "type": "ListNode"
      }
    ],
    "returnType": "ListNode",
    "constraints": [
      "1 <= number of nodes <= 100",
      "1 <= Node.val <= 100"
    ],
    "ioNote": "Linked lists are given as arrays of node values in order (empty array = empty list). The output is likewise an array. The expected output is the sublist starting at the middle node.",
    "testCases": [
      {
        "input": {
          "head": [
            1,
            2,
            3,
            4,
            5
          ]
        },
        "expectedOutput": [
          3,
          4,
          5
        ],
        "isHidden": false
      },
      {
        "input": {
          "head": [
            1,
            2,
            3,
            4,
            5,
            6
          ]
        },
        "expectedOutput": [
          4,
          5,
          6
        ],
        "isHidden": false
      },
      {
        "input": {
          "head": [
            1
          ]
        },
        "expectedOutput": [
          1
        ],
        "isHidden": true
      },
      {
        "input": {
          "head": [
            1,
            2
          ]
        },
        "expectedOutput": [
          2
        ],
        "isHidden": true
      },
      {
        "input": {
          "head": [
            10,
            20,
            30
          ]
        },
        "expectedOutput": [
          20,
          30
        ],
        "isHidden": true
      },
      {
        "input": {
          "head": [
            4,
            8,
            15,
            16,
            23,
            42,
            99,
            100
          ]
        },
        "expectedOutput": [
          23,
          42,
          99,
          100
        ],
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nfunction middleNode(head) {\n    // Write your solution here\n}",
      "python": "def middleNode(head: Optional[ListNode]) -> Optional[ListNode]:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "head = [1,2,3,4,5]",
        "output": "[3,4,5]",
        "expectedOutput": "[3,4,5]",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "head = [1,2,3,4,5,6]",
        "output": "[4,5,6]",
        "expectedOutput": "[4,5,6]",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Remove Duplicates from Sorted Array",
    "slug": "remove-duplicates-from-sorted-array",
    "difficulty": "Easy",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Arrays",
    "subtopic": "Two Pointers",
    "estimatedTimeMins": 20,
    "expectedComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "description": "At {{companyName}}, the {{department}} data ingestion pipeline sanitizes sorted database records stored in an integer array nums. Duplicate entries must be removed in-place such that each unique element appears only once while maintaining relative order. As a {{roleTitle}} in {{domain}}, return the number of unique elements k, with the first k elements of nums holding the result.",
    "functionName": "removeDuplicates",
    "parameters": [
      {
        "name": "nums",
        "type": "int[]"
      }
    ],
    "returnType": "int",
    "constraints": [
      "1 <= nums.length <= 30000",
      "-100 <= nums[i] <= 100",
      "nums is sorted in non-decreasing order"
    ],
    "ioNote": "expectedOutput is k. expectedModifiedArray is what nums[0..k-1] must contain after the call.",
    "checker": "prefix",
    "testCases": [
      {
        "input": {
          "nums": [
            1,
            1,
            2
          ]
        },
        "expectedOutput": 2,
        "expectedModifiedArray": [
          1,
          2
        ],
        "isHidden": false
      },
      {
        "input": {
          "nums": [
            0,
            0,
            1,
            1,
            1,
            2,
            2,
            3,
            3,
            4
          ]
        },
        "expectedOutput": 5,
        "expectedModifiedArray": [
          0,
          1,
          2,
          3,
          4
        ],
        "isHidden": false
      },
      {
        "input": {
          "nums": [
            1
          ]
        },
        "expectedOutput": 1,
        "expectedModifiedArray": [
          1
        ],
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            1,
            2,
            3
          ]
        },
        "expectedOutput": 3,
        "expectedModifiedArray": [
          1,
          2,
          3
        ],
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            5,
            5,
            5,
            5
          ]
        },
        "expectedOutput": 1,
        "expectedModifiedArray": [
          5
        ],
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            -3,
            -3,
            0,
            0,
            2
          ]
        },
        "expectedOutput": 3,
        "expectedModifiedArray": [
          -3,
          0,
          2
        ],
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} nums\n * @return {number}\n */\nfunction removeDuplicates(nums) {\n    // Write your solution here\n}",
      "python": "def removeDuplicates(nums: list[int]) -> int:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "nums = [1,1,2]",
        "output": "2",
        "expectedOutput": "2",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "nums = [0,0,1,1,1,2,2,3,3,4]",
        "output": "5",
        "expectedOutput": "5",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Remove Element",
    "slug": "remove-element",
    "difficulty": "Easy",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Arrays",
    "subtopic": "Two Pointers",
    "estimatedTimeMins": 20,
    "expectedComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "description": "At {{companyName}}, the {{department}} inventory management service purges discontinued SKU identifiers with value val from a sequence array nums in-place. As a {{roleTitle}} in {{domain}}, remove all occurrences of val in nums, and return the number of remaining elements k.",
    "functionName": "removeElement",
    "parameters": [
      {
        "name": "nums",
        "type": "int[]"
      },
      {
        "name": "val",
        "type": "int"
      }
    ],
    "returnType": "int",
    "constraints": [
      "0 <= nums.length <= 100",
      "0 <= nums[i] <= 50",
      "0 <= val <= 100"
    ],
    "ioNote": "expectedOutput is k. expectedModifiedArray lists the kept values; compare nums[0..k-1] against it as an unordered multiset.",
    "checker": "prefix_unordered",
    "testCases": [
      {
        "input": {
          "nums": [
            3,
            2,
            2,
            3
          ],
          "val": 3
        },
        "expectedOutput": 2,
        "expectedModifiedArray": [
          2,
          2
        ],
        "isHidden": false
      },
      {
        "input": {
          "nums": [
            0,
            1,
            2,
            2,
            3,
            0,
            4,
            2
          ],
          "val": 2
        },
        "expectedOutput": 5,
        "expectedModifiedArray": [
          0,
          1,
          3,
          0,
          4
        ],
        "isHidden": false
      },
      {
        "input": {
          "nums": [],
          "val": 1
        },
        "expectedOutput": 0,
        "expectedModifiedArray": [],
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            1
          ],
          "val": 1
        },
        "expectedOutput": 0,
        "expectedModifiedArray": [],
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            4,
            5
          ],
          "val": 6
        },
        "expectedOutput": 2,
        "expectedModifiedArray": [
          4,
          5
        ],
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            2,
            2,
            2
          ],
          "val": 2
        },
        "expectedOutput": 0,
        "expectedModifiedArray": [],
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} nums\n * @param {number} val\n * @return {number}\n */\nfunction removeElement(nums, val) {\n    // Write your solution here\n}",
      "python": "def removeElement(nums: list[int], val: int) -> int:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "nums = [3,2,2,3], val = 3",
        "output": "2",
        "expectedOutput": "2",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "nums = [0,1,2,2,3,0,4,2], val = 2",
        "output": "5",
        "expectedOutput": "5",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Search Insert Position",
    "slug": "search-insert-position",
    "difficulty": "Easy",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Arrays",
    "subtopic": "Binary Search",
    "estimatedTimeMins": 20,
    "expectedComplexity": {
      "time": "O(log N)",
      "space": "O(1)"
    },
    "description": "At {{companyName}}, the {{department}} distributed indexing service maintains a sorted array of distinct integers nums. When a new entity with identifier target arrives, as a {{roleTitle}} in {{domain}}, return the index if target is found. If not, return the index where it would be if it were inserted in order in O(log n) runtime.",
    "functionName": "searchInsert",
    "parameters": [
      {
        "name": "nums",
        "type": "int[]"
      },
      {
        "name": "target",
        "type": "int"
      }
    ],
    "returnType": "int",
    "constraints": [
      "1 <= nums.length <= 10000",
      "-10000 <= nums[i], target <= 10000",
      "nums contains distinct values sorted ascending"
    ],
    "testCases": [
      {
        "input": {
          "nums": [
            1,
            3,
            5,
            6
          ],
          "target": 5
        },
        "expectedOutput": 2,
        "isHidden": false
      },
      {
        "input": {
          "nums": [
            1,
            3,
            5,
            6
          ],
          "target": 2
        },
        "expectedOutput": 1,
        "isHidden": false
      },
      {
        "input": {
          "nums": [
            1,
            3,
            5,
            6
          ],
          "target": 7
        },
        "expectedOutput": 4,
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            1,
            3,
            5,
            6
          ],
          "target": 0
        },
        "expectedOutput": 0,
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            1
          ],
          "target": 1
        },
        "expectedOutput": 0,
        "isHidden": true
      },
      {
        "input": {
          "nums": [
            2,
            4,
            6,
            8,
            10
          ],
          "target": 9
        },
        "expectedOutput": 4,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number}\n */\nfunction searchInsert(nums, target) {\n    // Write your solution here\n}",
      "python": "def searchInsert(nums: list[int], target: int) -> int:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "nums = [1,3,5,6], target = 5",
        "output": "2",
        "expectedOutput": "2",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "nums = [1,3,5,6], target = 2",
        "output": "1",
        "expectedOutput": "1",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Plus One",
    "slug": "plus-one",
    "difficulty": "Easy",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Arrays",
    "subtopic": "Array Manipulation",
    "estimatedTimeMins": 20,
    "expectedComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "description": "At {{companyName}}, the {{department}} billing engine represents high-precision invoice sequence numbers as a large integer formatted in an integer array digits, where digits[i] is the i-th digit. As a {{roleTitle}} in {{domain}}, increment the large integer by one and return the resulting array of digits.",
    "functionName": "plusOne",
    "parameters": [
      {
        "name": "digits",
        "type": "int[]"
      }
    ],
    "returnType": "int[]",
    "constraints": [
      "1 <= digits.length <= 100",
      "0 <= digits[i] <= 9",
      "No leading zeros except the number 0 itself"
    ],
    "testCases": [
      {
        "input": {
          "digits": [
            1,
            2,
            3
          ]
        },
        "expectedOutput": [
          1,
          2,
          4
        ],
        "isHidden": false
      },
      {
        "input": {
          "digits": [
            4,
            3,
            2,
            1
          ]
        },
        "expectedOutput": [
          4,
          3,
          2,
          2
        ],
        "isHidden": false
      },
      {
        "input": {
          "digits": [
            9
          ]
        },
        "expectedOutput": [
          1,
          0
        ],
        "isHidden": true
      },
      {
        "input": {
          "digits": [
            9,
            9,
            9
          ]
        },
        "expectedOutput": [
          1,
          0,
          0,
          0
        ],
        "isHidden": true
      },
      {
        "input": {
          "digits": [
            0
          ]
        },
        "expectedOutput": [
          1
        ],
        "isHidden": true
      },
      {
        "input": {
          "digits": [
            1,
            9,
            9
          ]
        },
        "expectedOutput": [
          2,
          0,
          0
        ],
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} digits\n * @return {number[]}\n */\nfunction plusOne(digits) {\n    // Write your solution here\n}",
      "python": "def plusOne(digits: list[int]) -> list[int]:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "digits = [1,2,3]",
        "output": "[1,2,4]",
        "expectedOutput": "[1,2,4]",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "digits = [4,3,2,1]",
        "output": "[4,3,2,2]",
        "expectedOutput": "[4,3,2,2]",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Sqrt(x)",
    "slug": "sqrt-x",
    "difficulty": "Easy",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Binary Search",
    "subtopic": "Binary Search on Answer",
    "estimatedTimeMins": 20,
    "expectedComplexity": {
      "time": "O(log N)",
      "space": "O(1)"
    },
    "description": "At {{companyName}}, the {{department}} embedded sensor firmware must compute the integer square root of a non-negative integer x without invoking built-in exponent functions. As a {{roleTitle}} in {{domain}}, return the square root of x rounded down to the nearest integer.",
    "functionName": "mySqrt",
    "parameters": [
      {
        "name": "x",
        "type": "int"
      }
    ],
    "returnType": "int",
    "constraints": [
      "0 <= x <= 2147483647"
    ],
    "testCases": [
      {
        "input": {
          "x": 4
        },
        "expectedOutput": 2,
        "isHidden": false
      },
      {
        "input": {
          "x": 8
        },
        "expectedOutput": 2,
        "isHidden": false
      },
      {
        "input": {
          "x": 0
        },
        "expectedOutput": 0,
        "isHidden": true
      },
      {
        "input": {
          "x": 1
        },
        "expectedOutput": 1,
        "isHidden": true
      },
      {
        "input": {
          "x": 2147483647
        },
        "expectedOutput": 46340,
        "isHidden": true
      },
      {
        "input": {
          "x": 99999999
        },
        "expectedOutput": 9999,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} x\n * @return {number}\n */\nfunction mySqrt(x) {\n    // Write your solution here\n}",
      "python": "def mySqrt(x: int) -> int:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "x = 4",
        "output": "2",
        "expectedOutput": "2",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "x = 8",
        "output": "2",
        "expectedOutput": "2",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Climbing Stairs",
    "slug": "climbing-stairs",
    "difficulty": "Easy",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Dynamic Programming",
    "subtopic": "1D DP",
    "estimatedTimeMins": 20,
    "expectedComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "description": "At {{companyName}}'s {{location}} logistics automation testbed, a robotic lifter climbs an elevation rack of n steps. Each step transition can climb either 1 or 2 steps at a time. As a {{roleTitle}} in {{domain}}, calculate how many distinct ways the lifter can reach the top step.",
    "functionName": "climbStairs",
    "parameters": [
      {
        "name": "n",
        "type": "int"
      }
    ],
    "returnType": "int",
    "constraints": [
      "1 <= n <= 45"
    ],
    "testCases": [
      {
        "input": {
          "n": 2
        },
        "expectedOutput": 2,
        "isHidden": false
      },
      {
        "input": {
          "n": 3
        },
        "expectedOutput": 3,
        "isHidden": false
      },
      {
        "input": {
          "n": 1
        },
        "expectedOutput": 1,
        "isHidden": true
      },
      {
        "input": {
          "n": 5
        },
        "expectedOutput": 8,
        "isHidden": true
      },
      {
        "input": {
          "n": 10
        },
        "expectedOutput": 89,
        "isHidden": true
      },
      {
        "input": {
          "n": 45
        },
        "expectedOutput": 1836311903,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} n\n * @return {number}\n */\nfunction climbStairs(n) {\n    // Write your solution here\n}",
      "python": "def climbStairs(n: int) -> int:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "n = 2",
        "output": "2",
        "expectedOutput": "2",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "n = 3",
        "output": "3",
        "expectedOutput": "3",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Valid Anagram",
    "slug": "valid-anagram",
    "difficulty": "Easy",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Strings",
    "subtopic": "Hash Map",
    "estimatedTimeMins": 20,
    "expectedComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "description": "At {{companyName}}, the {{department}} fraud detection service detects identity obfuscation by checking if a candidate string t is an anagram of an authenticated string s. As a {{roleTitle}} in {{domain}}, return true if t is an anagram of s, and false otherwise.",
    "functionName": "isAnagram",
    "parameters": [
      {
        "name": "s",
        "type": "string"
      },
      {
        "name": "t",
        "type": "string"
      }
    ],
    "returnType": "boolean",
    "constraints": [
      "1 <= s.length, t.length <= 50000",
      "s and t consist of lowercase English letters"
    ],
    "testCases": [
      {
        "input": {
          "s": "anagram",
          "t": "nagaram"
        },
        "expectedOutput": true,
        "isHidden": false
      },
      {
        "input": {
          "s": "rat",
          "t": "car"
        },
        "expectedOutput": false,
        "isHidden": false
      },
      {
        "input": {
          "s": "a",
          "t": "a"
        },
        "expectedOutput": true,
        "isHidden": true
      },
      {
        "input": {
          "s": "ab",
          "t": "a"
        },
        "expectedOutput": false,
        "isHidden": true
      },
      {
        "input": {
          "s": "listen",
          "t": "silent"
        },
        "expectedOutput": true,
        "isHidden": true
      },
      {
        "input": {
          "s": "aacc",
          "t": "ccac"
        },
        "expectedOutput": false,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {string} s\n * @param {string} t\n * @return {boolean}\n */\nfunction isAnagram(s, t) {\n    // Write your solution here\n}",
      "python": "def isAnagram(s: str, t: str) -> bool:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "s = \"anagram\", t = \"nagaram\"",
        "output": "true",
        "expectedOutput": "true",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "s = \"rat\", t = \"car\"",
        "output": "false",
        "expectedOutput": "false",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Symmetric Tree",
    "slug": "symmetric-tree",
    "difficulty": "Easy",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Trees",
    "subtopic": "Binary Tree Traversal",
    "estimatedTimeMins": 20,
    "expectedComplexity": {
      "time": "O(N)",
      "space": "O(N)"
    },
    "description": "At {{companyName}}, the {{department}} distributed database topology is organized as a binary tree with root node root. To ensure dual-zone fault tolerance across {{location}}, the tree structure must mirror itself around its center. As a {{roleTitle}} in {{domain}}, check whether the tree is symmetric around its center.",
    "functionName": "isSymmetric",
    "parameters": [
      {
        "name": "root",
        "type": "TreeNode"
      }
    ],
    "returnType": "boolean",
    "constraints": [
      "0 <= number of nodes <= 1000",
      "-100 <= Node.val <= 100"
    ],
    "ioNote": "Trees are given in level-order as an array where null marks a missing child (the same format used by LeetCode). An empty array means an empty tree.",
    "testCases": [
      {
        "input": {
          "root": [
            1,
            2,
            2,
            3,
            4,
            4,
            3
          ]
        },
        "expectedOutput": true,
        "isHidden": false
      },
      {
        "input": {
          "root": [
            1,
            2,
            2,
            null,
            3,
            null,
            3
          ]
        },
        "expectedOutput": false,
        "isHidden": false
      },
      {
        "input": {
          "root": [
            1
          ]
        },
        "expectedOutput": true,
        "isHidden": true
      },
      {
        "input": {
          "root": [
            1,
            2,
            2,
            null,
            3,
            3
          ]
        },
        "expectedOutput": true,
        "isHidden": true
      },
      {
        "input": {
          "root": [
            1,
            2,
            3
          ]
        },
        "expectedOutput": false,
        "isHidden": true
      },
      {
        "input": {
          "root": [
            1,
            2,
            2,
            2,
            null,
            2
          ]
        },
        "expectedOutput": false,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {TreeNode} root\n * @return {boolean}\n */\nfunction isSymmetric(root) {\n    // Write your solution here\n}",
      "python": "def isSymmetric(root: Optional[TreeNode]) -> bool:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "root = [1,2,2,3,4,4,3]",
        "output": "true",
        "expectedOutput": "true",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "root = [1,2,2,null,3,null,3]",
        "output": "false",
        "expectedOutput": "false",
        "explanation": "Expected output for example 2"
      }
    ]
  },
  {
    "title": "Maximum Depth of Binary Tree",
    "slug": "maximum-depth-of-binary-tree",
    "difficulty": "Easy",
    "category": "DSA",
    "roleApplicability": [
      "Backend",
      "Full Stack",
      "Data Engineer"
    ],
    "topic": "Trees",
    "subtopic": "Binary Tree Traversal",
    "estimatedTimeMins": 20,
    "expectedComplexity": {
      "time": "O(N)",
      "space": "O(N)"
    },
    "description": "At {{companyName}}, the {{department}} organizational hierarchy graph is modeled as a binary tree starting at root. As a {{roleTitle}} in {{domain}}, determine the maximum depth of the tree to evaluate reporting tier latency.\n\nA binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
    "functionName": "maxDepth",
    "parameters": [
      {
        "name": "root",
        "type": "TreeNode"
      }
    ],
    "returnType": "int",
    "constraints": [
      "0 <= number of nodes <= 10000",
      "-100 <= Node.val <= 100"
    ],
    "ioNote": "Trees are given in level-order as an array where null marks a missing child (the same format used by LeetCode). An empty array means an empty tree.",
    "testCases": [
      {
        "input": {
          "root": [
            3,
            9,
            20,
            null,
            null,
            15,
            7
          ]
        },
        "expectedOutput": 3,
        "isHidden": false
      },
      {
        "input": {
          "root": [
            1,
            null,
            2
          ]
        },
        "expectedOutput": 2,
        "isHidden": false
      },
      {
        "input": {
          "root": []
        },
        "expectedOutput": 0,
        "isHidden": true
      },
      {
        "input": {
          "root": [
            1
          ]
        },
        "expectedOutput": 1,
        "isHidden": true
      },
      {
        "input": {
          "root": [
            1,
            2,
            3,
            4,
            null,
            null,
            5,
            6
          ]
        },
        "expectedOutput": 4,
        "isHidden": true
      },
      {
        "input": {
          "root": [
            1,
            2,
            null,
            3,
            null,
            4,
            null,
            5
          ]
        },
        "expectedOutput": 5,
        "isHidden": true
      }
    ],
    "starterCode": {
      "javascript": "/**\n * @param {TreeNode} root\n * @return {number}\n */\nfunction maxDepth(root) {\n    // Write your solution here\n}",
      "python": "def maxDepth(root: Optional[TreeNode]) -> int:\n    # Write your solution here\n    pass"
    },
    "examples": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "3",
        "expectedOutput": "3",
        "explanation": "Expected output for example 1"
      },
      {
        "input": "root = [1,null,2]",
        "output": "2",
        "expectedOutput": "2",
        "explanation": "Expected output for example 2"
      }
    ]
  }
];