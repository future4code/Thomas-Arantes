function isAnagram(s: string, t: string) {
    return s.split("").sort().join("") === t.split("").sort().join("")
}

isAnagram("gato", "toga")
isAnagram("dksjhdkjsa", "dsdsdsds")