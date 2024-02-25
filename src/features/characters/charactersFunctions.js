export const handleRang = (quantiteMana) => {
    // Implement logic to calculate the rank based on the amount of mana
    /*
        G-  (1 to 100 PM)
        G   (101 to 250 PM)
        G+ (251 to 500 PM)
        F-  (501 to 1000 PM)
        F   (1001 to 1500 PM)
        F+ (1501 to 2000 PM)
        E-  (2001 to 3000 PM)
        E   (3001 to 4000 PM)
        E+ (4001 to 5000 PM)
        D-  (5001 to 10000 PM)
        D   (10001 to 15000 PM)
        D+ (15001 to 20000 PM)
        C-  (20001 to 30000 PM)
        C   (30001 to 40000 PM)
        C+ (40001 to 50000 PM)
        B-  (50001 to 60000 PM)
        B   (60001 to 75000 PM)
        B+ (75001 to 100000 PM)
        A-  (100000 to 250000 PM)
        A   (250001 to 500000 PM)
        A+ (500001 to 1000000 PM)
        S   (1000001 to 10000000 PM)
        SS (10000001 to 100000000 PM)
        SSS  (100000001 to 250000000 PM)
        SU     (250000001 to 750000000 PM)
        U   (+750000001 PM)
     */
    console.log("in handleRang", quantiteMana);
    if (quantiteMana >= 1 && quantiteMana <= 100) {
        return 'G-';
    } else if (quantiteMana >= 101 && quantiteMana <= 250) {
        return 'G';
    } else if (quantiteMana >= 251 && quantiteMana <= 500) {
        return 'G+';
    } else if (quantiteMana >= 501 && quantiteMana <= 1000) {
        return 'F-';
    } else if (quantiteMana >= 1001 && quantiteMana <= 1500) {
        return 'F';
    } else if (quantiteMana >= 1501 && quantiteMana <= 2000) {
        return 'F+';
    } else if (quantiteMana >= 2001 && quantiteMana <= 3000) {
        return 'E-';
    } else if (quantiteMana >= 3001 && quantiteMana <= 4000) {
        return 'E';
    } else if (quantiteMana >= 4001 && quantiteMana <= 5000) {
        return 'E+';
    } else if (quantiteMana >= 5001 && quantiteMana <= 10000) {
        return 'D-';
    } else if (quantiteMana >= 10001 && quantiteMana <= 15000) {
        return 'D';
    } else if (quantiteMana >= 15001 && quantiteMana <= 20000) {
        return 'D+';
    } else if (quantiteMana >= 20001 && quantiteMana <= 30000) {
        return 'C-';
    } else if (quantiteMana >= 30001 && quantiteMana <= 40000) {
        return 'C';
    } else if (quantiteMana >= 40001 && quantiteMana <= 50000) {
        return 'C+';
    } else if (quantiteMana >= 50001 && quantiteMana <= 60000) {
        return 'B-';
    } else if (quantiteMana >= 60001 && quantiteMana <= 75000) {
        return 'B';
    } else if (quantiteMana >= 75001 && quantiteMana <= 100000) {
        return 'B+';
    } else if (quantiteMana >= 100001 && quantiteMana <= 250000) {
        return 'A-';
    } else if (quantiteMana >= 250001 && quantiteMana <= 500000) {
        return 'A';
    } else if (quantiteMana >= 500001 && quantiteMana <= 1000000) {
        return 'A+';
    } else if (quantiteMana >= 1000001 && quantiteMana <= 10000000) {
        return 'S';
    } else if (quantiteMana >= 10000001 && quantiteMana <= 100000000) {
        return 'SS';
    } else if (quantiteMana >= 100000001 && quantiteMana <= 250000000) {
        return 'SSS';
    } else if (quantiteMana >= 250000001 && quantiteMana <= 750000000) {
        return 'SU';
    } else if (quantiteMana >= 750000001) {
        return 'U';
    }
}
