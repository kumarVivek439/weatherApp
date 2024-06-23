const userActivities = [
    { userId: 1, activityType: 'login', timestamp: '2024-06-14T10:00:00Z' },
    { userId: 2, activityType: 'post', timestamp: '2024-06-14T11:00:00Z' },
    { userId: 1, activityType: 'logout', timestamp: '2024-06-14T12:00:00Z' },
    // Add more activities as needed
];



function countUniqueUsers(data) {
    const uniqueUsers = new Set();
    data.forEach(entry => uniqueUsers.add(entry.userId));
    return uniqueUsers.size;
}

function findMostCommonActivityType(data) {
    const activityCount = {};
    data.forEach(entry => {
        const { activityType } = entry;
        if (activityCount[activityType]) {
            activityCount[activityType]++;
        } else {
            activityCount[activityType] = 1;
        }
    });

    let mostCommonActivity = '';
    let maxCount = 0;

    for (const activityType in activityCount) {
        if (activityCount[activityType] > maxCount) {
            maxCount = activityCount[activityType];
            mostCommonActivity = activityType;
        }
    }

    return mostCommonActivity;
}


function generateTimeline(data) {
    const timeline = {};

    // Group activities by userId
    data.forEach(entry => {
        const { userId, timestamp, ...rest } = entry;
        if (!timeline[userId]) {
            timeline[userId] = [];
        }
        timeline[userId].push({ timestamp, ...rest });
    });

    // Sort activities by timestamp for each user
    for (const userId in timeline) {
        timeline[userId].sort((a, b) => {
            return new Date(a.timestamp) - new Date(b.timestamp);
        });
    }

    return timeline;
}



console.log('Number of unique users:', countUniqueUsers(userActivities));
console.log('Most common activity type:', findMostCommonActivityType(userActivities));
console.log('Timeline of activities:', generateTimeline(userActivities));