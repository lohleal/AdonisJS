import type { HttpContext } from '@adonisjs/core/http'
import { CoursesService } from '#services/courses_service'
import { createCourseValidator, updateCourseValidator } from '#validators/course'

export default class CoursesController {

  /**
   * Display a list of resource
   */
  async index({response}: HttpContext) {
    const courses = await new CoursesService().getAllCourses()

    return response.status(201).json({
      message: 'OK',
      data: courses,
    })
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {

    const payload = await request.validateUsing(createCourseValidator)

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
  async show({ response, params }: HttpContext) {
    const course = await new CoursesService().getCourseById(params.id)

    if(!course) {
      return response.status(404).json({
        message: 'NOT FOUND',
      })
    }

    return response.status(201).json({
      message: 'OK',
      data: course,
    })
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {

    const course = await new CoursesService().updateCourse(params.id, request.body())

    if(!course) {
      return response.status(422).json({
        message: 'NOT FOUND',
      })
    }

    return response.status(201).json({
      message: 'OK',
      data: course,
    })
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {

    const course = await new CoursesService().deleteCourse(params.id)

    if(!course) {
      return response.status(404).json({
        message: 'NOT FOUND',
      })
    }

    return response.status(201).json({
      message: 'OK',
      data: course,
    })
  }

  async test({ params, response }: HttpContext) {
      return response.status(200).json({
        message: "TEST OK"
      })
  }
}