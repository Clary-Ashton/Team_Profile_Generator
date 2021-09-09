const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('should create an object with a name, id, email and officeNumber property', () => {
      const manager = new Manager("Clary Mawangi", "8", "clarynsik@hotmail.com", "28");
  
      expect(manager.name).toBe("Clary Mawangi");
      expect(manager.id).toBe("8");
      expect(manager.email).toBe("clarynsik@hotmail.com");
      expect(manager.officeNumber).toBe("28")
    });
    it('getOfficeNumber() function returns office number', () => {
        const manager = new Manager("Clary Mawangi", "8", "clarynsik@hotmail.com", "28");
        expect(manager.getOfficeNumber()).toBe("28");
    });
    it('getRole() function returns "Manager"', () => {
        const manager = new Manager("Clary Mawangi", "8", "clarynsik@hotmail.com", "28");
        expect(manager.getRole()).toBe("Manager");
    });
});