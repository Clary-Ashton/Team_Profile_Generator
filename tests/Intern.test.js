const Intern = require('../lib/Intern');


describe('Intern', () => {
    it('should create an object with name, id, email and school property', () => {
      const intern = new Intern("Jayden", "5", "jayden@hotmail.com", "Five Ways School");
  
      expect(intern.name).toBe("Jayden");
      expect(intern.id).toBe("5");
      expect(intern.email).toBe("Five Ways School");
      expect(intern.school).toBe("Five Ways School")
    });
    it('getSchool() function returns Five Ways School', () => {
        const intern = new Intern("Jayden", "5", "jayden@hotmail.com", "Five Ways School");
        expect(intern.getSchool()).toBe("Five Ways School");
    });
    it('getRole() function returns "Intern"', () => {
        const intern = new Intern("Jayden", "5", "jayden@hotmail.com", "Five Ways School");
        expect(intern.getRole()).toBe("Intern");
    });
  });