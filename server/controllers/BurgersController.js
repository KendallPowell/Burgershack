import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";



export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getall)
      .post('', this.create)
  }

  async getall(request, response, next) {
    try {
      const burgers = await burgersService.getAll()
      return res.send(burgers)
    } catch (error) {
      next(error)
    }
  }

  async create(request, response, next) {
    try {

    } catch (error) {
      next(error)
    }
  }
}