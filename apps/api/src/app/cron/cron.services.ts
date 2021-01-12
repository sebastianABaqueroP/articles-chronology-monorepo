import { HttpService, Injectable, Logger } from "@nestjs/common";
import { Interval } from "@nestjs/schedule";
import { Observable } from "rxjs";

@Injectable() 
export class CronService {
    
    private readonly logger = new Logger(CronService.name);
    
    constructor(private httpService: HttpService) {
    }

    @Interval(600000)
    handleCronHours() {
        this.logger.debug('Cron Job called every 10 minutes');
        let response = {};
        let req;

        req = this.httpService.get('http://hn.algolia.com/api/v1/search_by_date?query=nodejs');

        if (req) {
            response['status'] = 200;
            response['data']= req;
            return response
        }
    }

    @Interval(3600000)
    handleCronMinutes() {
        this.logger.debug('Cron Job called when the current hour is 1');
        let response = {};
        let req;

        req = this.httpService.get('http://hn.algolia.com/api/v1/search_by_date?query=nodejs');

        if (req) {
            response['status'] = 200;
            response['data']= req;
            return response
        }
    }


}
