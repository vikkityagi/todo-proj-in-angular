import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class DataService {

  constructor() { }

  getCarData(): Observable<any> {
    const carData = [
      {
        "year": 2021,
        "data": [
          {
            "month": "January",
            "sales": [
              {
                "carModel": "Model A",
                "quantity": 150
              },
              {
                "carModel": "Model B",
                "quantity": 100
              },
              {
                "carModel": "Model C",
                "quantity": 80
              }
            ]
          },
          {
            "month": "February",
            "sales": [
              {
                "carModel": "Model A",
                "quantity": 120
              },
              {
                "carModel": "Model B",
                "quantity": 130
              },
              {
                "carModel": "Model C",
                "quantity": 90
              }
            ]
          },
          {
            "month": "March",
            "sales": [
              {
                "carModel": "Model A",
                "quantity": 110
              },
              {
                "carModel": "Model B",
                "quantity": 105
              },
              {
                "carModel": "Model C",
                "quantity": 95
              }
            ]
          },
          {
            "month": "April",
            "sales": [
              {
                "carModel": "Model A",
                "quantity": 115
              },
              {
                "carModel": "Model B",
                "quantity": 125
              },
              {
                "carModel": "Model C",
                "quantity": 85
              }
            ]
          },
          {
            "month": "May",
            "sales": [
              {
                "carModel": "Model A",
                "quantity": 135
              },
              {
                "carModel": "Model B",
                "quantity": 145
              },
              {
                "carModel": "Model C",
                "quantity": 105
              }
            ]
          },
          {
            "month": "June",
            "sales": [
              {
                "carModel": "Model A",
                "quantity": 125
              },
              {
                "carModel": "Model B",
                "quantity": 120
              },
              {
                "carModel": "Model C",
                "quantity": 110
              }
            ]
          },
          {
            "month": "July",
            "sales": [
              {
                "carModel": "Model A",
                "quantity": 140
              },
              {
                "carModel": "Model B",
                "quantity": 130
              },
              {
                "carModel": "Model C",
                "quantity": 115
              }
            ]
          },
          {
            "month": "August",
            "sales": [
              {
                "carModel": "Model A",
                "quantity": 150
              },
              {
                "carModel": "Model B",
                "quantity": 140
              },
              {
                "carModel": "Model C",
                "quantity": 120
              }
            ]
          },
          {
            "month": "September",
            "sales": [
              {
                "carModel": "Model A",
                "quantity": 155
              },
              {
                "carModel": "Model B",
                "quantity": 135
              },
              {
                "carModel": "Model C",
                "quantity": 125
              }
            ]
          },
          {
            "month": "October",
            "sales": [
              {
                "carModel": "Model A",
                "quantity": 160
              },
              {
                "carModel": "Model B",
                "quantity": 150
              },
              {
                "carModel": "Model C",
                "quantity": 130
              }
            ]
          },
          {
            "month": "November",
            "sales": [
              {
                "carModel": "Model A",
                "quantity": 170
              },
              {
                "carModel": "Model B",
                "quantity": 160
              },
              {
                "carModel": "Model C",
                "quantity": 140
              }
            ]
          },
          {
            "month": "December",
            "sales": [
              {
                "carModel": "Model A",
                "quantity": 180
              },
              {
                "carModel": "Model B",
                "quantity": 170
              },
              {
                "carModel": "Model C",
                "quantity": 150
              }
            ]
          }
        ]
      },
      {
        "year": 2022,
        "data": [
          {
            "month": "January",
            "sales": [
              {
                "carModel": "Model A",
                "quantity": 140
              },
              {
                "carModel": "Model B",
                "quantity": 110
              },
              {
                "carModel": "Model C",
                "quantity": 85
              }
            ]
          },
          {
            "month": "February",
            "sales": [
              {
                "carModel": "Model A",
                "quantity": 125
              },
              {
                "carModel": "Model B",
                "quantity": 135
              },
              {
                "carModel": "Model C",
                "quantity": 95
              }
            ]
          }
        ]
      }
    ];

    return of(carData);
    
  }
}