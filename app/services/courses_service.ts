import logger from "@adonisjs/core/services/logger";
import { normalizeCherryPickObject } from "@adonisjs/lucid/utils";

let courses: any = [{name: 'kamilly motorista vrumvrum'}]
let currentId = 1


export class CoursesService {
  // Your code here

  async getAllCourses(){
    logger.info('ALL COURSES')
    return courses
  }

  async createCourses(courseData: any){
    logger.info('CREATE COURSES')

        if(!courseData.name || !courseData.duration){
            return null
        }

        const newCourse = {id: currentId++, ...courseData}
        const nc = {
            id: currentId,
            name: courseData.name,
            duration: courseData.duration,
        }
        courses.push(nc)
        currentId++
        return nc
  }
}

