const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('should Create an object containing name, id and email property', () => {
      const employee = new Employee("Noah", "25", "noah@hotmail.com");
  
      expect(employee.name).toBe("Noah");
      expect(employee.id).toBe("25");
      expect(employee.email).toBe("noah@hotmail.com");
    });
    it('Has functioning getName(), getId(), getEmail() and getRole() methods', () => {
        const employee = new Employee("Noah", "25", "noah@hotmail.com");
    
        expect(employee.getName()).toBe("Noah");
        expect(employee.getId()).toBe("25");
        expect(employee.getEmail()).toBe("noah@hotmail.com");
        expect(employee.getRole()).toBe("Employee");
      });
  });
