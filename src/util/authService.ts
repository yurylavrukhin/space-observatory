import { getRandomNumberInRange } from './getRandomNumberInRange';
import { sleep } from './sleep';

const PASSWORD = 'Mars Pathfinder';

const getIsAuthorized = async (email: string, password: string) => {
  // simulate network delay
  await sleep(getRandomNumberInRange(300, 1500));

  if (email && password === PASSWORD) {
    return true;
  }
  return false;
};

export class AuthService {
  authorize = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = getIsAuthorized(email, password);
      return await response;
    } catch {
      return false;
    }
  };
}

const authService = new AuthService();

export { authService };
