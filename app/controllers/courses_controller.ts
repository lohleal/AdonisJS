import type { HttpContext } from '@adonisjs/core/http'
import { CoursesService } from '#services/courses_service'
import { Validator } from '@vinejs/vine/types'


export default class CoursesController {
  /**
   * Display a list of resource
   */
  async index({response, params}: HttpContext) {
    const courses =  await new CoursesService().getAllCourses()

    return response.status(200).json({
      message: 'OK',
      data: courses,
    })
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {

    const payload = await request.validateUsing(createCoursesValidator)

    const course = await new CoursesService().createCourses(payload)

    if(!course) {
      return response.status(422).json({
        message: 'ERROR',
      })
    }

    return response.status(201).json({
      message: 'OK',
      data: course,
    })
  }



  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
  async update({ params, request }: HttpContext) {}
   */

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}