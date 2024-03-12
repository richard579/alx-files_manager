import dbClient from '../utils/db';
import redisClient from '../utils/redis';

class AppController {
  /**
   * Controller for endpoint GET /status that retrieves
   * mongodb client annd redis client connection statu
   */
  static getStatus(_req, res) {
    if (dbClient.isAlive() && redisClient.isAlive()) {
      res.status(200).json({ redis: true, db: true });
    }
  }

  /**
   * controller for endpoint GET /stats that retrieves
   * count of users and files
   */
  static async getStats(_req, res, next) {
    try {
      const users = await dbClient.nbUsers();
      const files = await dbClient.nbFiles();
      res.status(200).json({ users, files });
    } catch (err) {
      next(err);
    }
  }
}

export default AppController;
