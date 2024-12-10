export const books = [
    {
        id: "1",
        title: "The Psychology of Money",
        author: "Morgan Housel",
        category: "finance",
        year: 2020,
        description:
            "Learn how emotions, behaviors, and psychology influence financial decisions and discover timeless lessons for managing money effectively.",
        image:
            "https://images-na.ssl-images-amazon.com/images/I/81cpDaCJJCL.jpg",
        quota: 5,
        rackNumber: "33",
        isbn: "978-0857197689",
        language: "English",
        availableCopies: 5,
        lateFee: 1000,
        canBorrow: true,
        rating: 4.9,
        reviews: [
            {
                id: "1",
                author: "John Doe",
                date: "2023-11-15",
                rating: 5,
                content: "An insightful book that provides a great introduction to the psychological aspects of financial decision-making. Highly recommended for anyone interested in personal finance."
            }
        ]
    },
    {
        id: "2",
        title: "Atomic Habits",
        author: "James Clear",
        category: "self-help",
        year: 2018,
        description:
            "A guide to building good habits, breaking bad ones, and achieving remarkable results in everyday life.",
        image:
            "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
        quota: 5,
        rackNumber: "12",
        isbn: "978-0735211292",
        language: "English",
        availableCopies: 5,
        lateFee: 1000,
        canBorrow: true,
        rating: 4.8,
        reviews: [
            {
                id: "1",
                author: "Alice Brown",
                date: "2023-11-10",
                rating: 5,
                content: "This book transformed the way I approach habits. Practical and inspiring."
            }
        ]
    },
    {
        id: "3",
        title: "Sapiens",
        author: "Yuval Noah Harari",
        category: "history",
        year: 2015,
        description:
            "A brief history of humankind, exploring the journey of humans from the Stone Age to the modern world.",
        image:
            "https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg",
        quota: 0,
        rackNumber: "45",
        isbn: "978-0062316097",
        language: "English",
        availableCopies: 0,
        lateFee: 1500,
        canBorrow: false,
        rating: 4.7,
        reviews: [
            {
                id: "1",
                author: "David Green",
                date: "2023-09-12",
                rating: 5,
                content: "An enlightening journey through human history. Highly recommended."
            }
        ]
    },
    {
        id: "4",
        title: "The Lean Startup",
        author: "Eric Ries",
        category: "business",
        year: 2011,
        description:
            "A guide for entrepreneurs on how to innovate, test ideas, and build sustainable businesses in a rapidly changing world.",
        image:
            "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg",
        quota: 5,
        rackNumber: "27",
        isbn: "978-0307887894",
        language: "English",
        availableCopies: 5,
        lateFee: 1000,
        canBorrow: true,
        rating: 4.6,
        reviews: [
            {
                id: "1",
                author: "Steve Rogers",
                date: "2023-08-20",
                rating: 5,
                content: "A must-read for entrepreneurs. Packed with actionable advice."
            }
        ]
    },
    {
        id: "5",
        title: "Harry Potter",
        author: "George Orwell",
        category: "fiction",
        year: 1949,
        description:
            "A dystopian novel exploring themes of surveillance, government control, and individual freedom in a totalitarian state.",
        image:
            "https://images-na.ssl-images-amazon.com/images/I/81t2CVWEsUL.jpg",
        quota: 5,
        rackNumber: "50",
        isbn: "978-0451524935",
        language: "English",
        availableCopies: 5,
        lateFee: 1200,
        canBorrow: true,
        rating: 4.8,
        reviews: [
            {
                id: "1",
                author: "Emily Clark",
                date: "2023-10-14",
                rating: 5,
                content: "A chilling view of the future that feels relevant even today."
            },
            {
                id: "2",
                author: "Michael Brown",
                date: "2023-09-25",
                rating: 4,
                content: "A bit dark but incredibly thought-provoking. Must-read classic."
            }
        ]
    },
    {
        id: "6",
        title: "The Alchemist",
        author: "Paulo Coelho",
        category: "fiction",
        year: 1988,
        description:
            "A magical story of Santiago, an Andalusian shepherd, and his quest to find a treasure that teaches him about life and destiny.",
        image: "https://images-na.ssl-images-amazon.com/images/I/51Z0nLAfLmL._SX331_BO1,204,203,200_.jpg",
        quota: 0,
        rackNumber: "11",
        isbn: "978-0061122415",
        language: "English",
        availableCopies: 0,
        lateFee: 1000,
        canBorrow: false,
        rating: 4.7,
        reviews: [
            {
                id: "1",
                author: "Sophia Williams",
                date: "2023-08-19",
                rating: 5,
                content: "A beautiful story about following your dreams and finding purpose."
            }
        ]
    },
    {
        id: "8",
        title: "Educated",
        author: "Tara Westover",
        category: "memoir",
        year: 2018,
        description:
            "A memoir of a woman who grows up in a strict and abusive household in rural Idaho but escapes through education.",
        image: "https://images-na.ssl-images-amazon.com/images/I/81WojUxbbFL.jpg",
        quota: 5,
        rackNumber: "19",
        isbn: "978-0399590504",
        language: "English",
        availableCopies: 5,
        lateFee: 1000,
        canBorrow: true,
        rating: 4.8,
        reviews: [
            {
                id: "1",
                author: "Liam Johnson",
                date: "2023-11-02",
                rating: 5,
                content: "A raw and inspiring story of resilience and the power of education."
            }
        ]
    },
    {
        id: "9",
        title: "The Art of War",
        author: "Sun Tzu",
        category: "philosophy",
        year: -500,
        description:
            "An ancient Chinese military treatise that provides strategies for warfare and how they can be applied to life and leadership.",
        image: "https://cdn2.penguin.com.au/covers/original/9780877734529.jpg",
        quota: 0,
        rackNumber: "61",
        isbn: "978-0877734529",
        language: "English",
        availableCopies: 0,
        lateFee: 2000,
        canBorrow: false,
        rating: 4.5,
        reviews: [
            {
                id: "1",
                author: "Henry Carter",
                date: "2023-10-28",
                rating: 4,
                content: "Timeless strategies that are still applicable to leadership today."
            }
        ]
    },
    {
        id: "10",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        category: "fiction",
        year: 1925,
        description:
            "A classic American novel exploring themes of wealth, love, and the pursuit of the American Dream during the Jazz Age.",
        image: "https://i.pinimg.com/originals/a7/ea/79/a7ea79067b7149982f3856f6d85a22d0.jpg",
        quota: 5,
        rackNumber: "7",
        isbn: "978-0743273565",
        language: "English",
        availableCopies: 5,
        lateFee: 1200,
        canBorrow: true,
        rating: 4.7,
        reviews: [
            {
                id: "1",
                author: "Anna Thompson",
                date: "2023-09-20",
                rating: 5,
                content: "A hauntingly beautiful novel. Fitzgerald's prose is unparalleled."
            }
        ]
    },
    {
        id: "11",
        title: "Man's Search for Meaning",
        author: "Viktor E. Frankl",
        category: "philosophy",
        year: 1946,
        description:
            "A profound psychological memoir and exploration of the meaning of life, based on the author's experiences in a Nazi concentration camp.",
        image: "https://covers.shakespeareandcompany.com/97818460/9781846042843.jpg",
        quota: 5,
        rackNumber: "22",
        isbn: "978-0807014271",
        language: "English",
        availableCopies: 5,
        lateFee: 1500,
        canBorrow: true,
        rating: 4.9,
        reviews: [
            {
                id: "1",
                author: "Rachel Green",
                date: "2023-11-11",
                rating: 5,
                content: "A life-changing book that provides hope and perspective."
            }
        ]
    },
    {
        id: "12",
        title: "Becoming",
        author: "Michelle Obama",
        category: "memoir",
        year: 2018,
        description:
            "The memoir of former First Lady Michelle Obama, chronicling her life from childhood to the White House.",
        image: "https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL.jpg",
        quota: 5,
        rackNumber: "30",
        isbn: "978-1524763138",
        language: "English",
        availableCopies: 5,
        lateFee: 1200,
        canBorrow: true,
        rating: 4.8,
        reviews: [
            {
                id: "1",
                author: "Megan Roberts",
                date: "2023-10-15",
                rating: 5,
                content: "An inspiring and honest account of Michelle Obama's life journey."
            }
        ]
    }
];
