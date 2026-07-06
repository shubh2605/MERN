function getGradeByScore(score) {
    if (score < 0 || score > 100 || typeof score !== 'number') {
        return "Invalid Score";
    }
    switch (true) {
        case score > 90:
            return "A+";
        case score > 80:
            return "A";
        case score > 70:
            return "B+";
        case score > 60:
            return "B";
        case score > 50:
            return "C+";
        case score > 40:
            return "C";
        case score >= 33:
            return "D";
        default:
            return "F";
    }
}

console.log(getGradeByScore(33));