import { normalizeCherryPickObject } from "@adonisjs/lucid/utils";
import logger from '@adonisjs/core/services/logger'

let courses: any = [{ name: 'kamilly motorista vrumvrum' }]
let currentId = 1

export class CoursesService {

  async getAllCourses() {
    logger.info('ALL COURSES')
    return courses
  }

  async createCourses(courseData: any) {
    logger.info('CREATE COURSES')

    if (!courseData.name || !courseData.duration) {
      return null
    }

    const newCourse = { id: currentId++, ...courseData }
    const nc = {
      id: currentId,
      name: courseData.name,
      duration: courseData.duration,
    }
    courses.push(nc)
    currentId++
    return nc
  }

  async getCourseById(id: number) {
    logger.info("show")

    return courses.find((course: { id: number; }) => course.id == id);
  }

  async updateCourse(id: number, courseData: any) {
    logger.info("update")

    // Validações de negócio antes de atualizar
    if (!courseData.name && !courseData.duration) {
      return null
    }
    const index = courses.findIndex((course: { id: number; }) => course.id == id)

    if (index != -1) {
      courses[index] = { ...courses[index], ...courseData, id: id }
      return courses[index]
    }

    return null
  }

  async deleteCourse(id: number) {
    logger.info("delete")

    const index = courses.findIndex((course: { id: number; }) => course.id == id)

    if (index != -1) {
      return courses.splice(index, 1)
    }

    return null
  }
}