const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('should create an object with name, id, email and github property', () => {
      const engineer = new Engineer("Ashton", "4", "ashton@hotmail.com", "github.com/ashtonmawangi");
  
      expect(engineer.name).toBe("Ashton");
      expect(engineer.id).toBe("4");
      expect(engineer.email).toBe("ashton@homail.com");
      expect(engineer.github).toBe("github.com/ashtonmawangi")
    });
    it('getGithub() function returns github', () => {
        const engineer = new Engineer("ashton", "4", "ashton@hotmail.com", "github.com/ashtonmawangi");
        expect(engineer.getGithub()).toBe("github.com/ashtonmawangi");
    });
    it('getRole() function returns "Engineer"', () => {
        const engineer = new Engineer("Ashton", "4", "ashton@hotmail.com", "github.com/ashton");
        expect(engineer.getRole()).toBe("Engineer");
    });
  });