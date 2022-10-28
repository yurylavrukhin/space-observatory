import { getRandomNumberInRange } from './getRandomNumberInRange';
import { sleep } from './sleep';

const BOT_SHIELD_SLEEP_TIME = 300;
const EMAIL_ALLOWED_LIST = '*';
const PASSWORD = 'Mars Pathfinder';

const getIsAuthorized = async (email: string, password: string) => {
  await sleep(getRandomNumberInRange(100, 800));

  if (email && password === PASSWORD) {
    return true;
  }
  return false;
};

export class AuthService {
  authorize = async (email: string, password: string): Promise<boolean> => {
    const minimumWaitPromise = new Promise((resolve) =>
      setTimeout(resolve, BOT_SHIELD_SLEEP_TIME)
    );

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
