const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Doctors for our condorians',
      version: '1.0.0',
      description: 'Condor Labs Personal project',
      contact: {
        name: ' Jair Agudelo Mora ',
        email: 'aagudelo@condorlabs.io',
      },
    },
    paths: {
      '/users': {
        get: {
          summary: 'Get all users in the app',
          tags: ['User'],
          responses: {
            200: {
              description: 'A JSON object containing all the users',
            },
            401: {
              description: 'Authorization information is missing or invalid',
            },
            403: {
              description: 'Forbbiden',
            },
            500: {
              description: 'Internal server error',
            },
          },
        },
      },
      '/user/singin': {
        post: {
          summary: 'SingIn in the app',
          tags: ['User'],
          description: '',
          security: [],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  properties: {
                    name: {
                      type: 'string',
                    },
                    lastName: {
                      type: 'string',
                    },
                    password: {
                      type: 'string',
                    },
                    age: {
                      type: 'integer',
                    },
                  },
                  example: {
                    name: 'Luis',
                    lastName: 'Suarez Felix',
                    password: 'user4',
                    age: 34,
                  },
                },
              },
            },
          },
          responses: {
            200: {
              description: 'successful operation',
            },
            400: {
              description: 'Information is missing or invalid',
            },
            401: {
              description: 'Authorization information is missing or invalid',
            },
            403: {
              description: 'Forbbiden',
            },
            404: {
              description: 'Resource not found',
            },
            500: {
              description: 'Internal server error',
            },
          },
        },
      },
      '/user/login': {
        post: {
          summary: 'LogIn in the app',
          tags: ['User'],
          description: '',
          security: [],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  properties: {
                    name: {
                      type: 'string',
                    },
                    lastName: {
                      type: 'string',
                    },
                    password: {
                      type: 'string',
                    },
                  },
                  example: {
                    name: 'Luis',
                    lastName: 'Suarez Felix',
                    password: 'user4',
                  },
                },
              },
            },
          },
          responses: {
            200: {
              description: 'successful operation',
            },
            400: {
              description: 'Information is missing or invalid',
            },
            401: {
              description: 'Authorization information is missing or invalid',
            },
            403: {
              description: 'Forbbiden',
            },
            404: {
              description: 'Resource not found',
            },
            500: {
              description: 'Internal server error',
            },
          },
        },
      },
      '/doctors': {
        get: {
          summary: 'Get all professionals in the app',
          tags: ['Professionals'],
          responses: {
            200: {
              description: 'A JSON object containing all professionals',
            },
            401: {
              description: 'Authorization information is missing or invalid',
            },
            403: {
              description: 'Forbbiden',
            },
            500: {
              description: 'Internal server error',
            },
          },
        },
      },
      '/doctor': {
        post: {
          summary: 'Add new professional in the system',
          tags: ['Professionals'],
          description: '',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  properties: {
                    name: {
                      type: 'string',
                    },
                    lastName: {
                      type: 'string',
                    },
                    specialims: {
                      type: 'string',
                    },
                  },
                  example: {
                    name: 'Frnasisco',
                    lastName: 'Soto Iguaran',
                    specialims: 'Psychiatrist',
                  },
                },
              },
            },
          },
          responses: {
            200: {
              description: 'successful operation',
            },
            400: {
              description: 'Information is missing or invalid',
            },
            401: {
              description: 'Authorization information is missing or invalid',
            },
            403: {
              description: 'Forbbiden',
            },
            404: {
              description: 'Resource not found',
            },
            500: {
              description: 'Internal server error',
            },
          },
        },
        put: {
          summary: 'Soft delete with id Professional',
          tags: ['Professionals'],
          description: '',
          parameters: [
            {
              description: '',
              in: 'query',
              name: 'doctor',
              required: true,
              schema: {
                type: 'string',
              },
            },
          ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  state: {
                    typle: 'boolean',
                  },
                },
                example: {
                  state: true,
                },
              },
            },
          },
          responses: {
            200: {
              description: 'successful operation',
            },
            400: {
              description: 'Information is missing or invalid',
            },
            401: {
              description: 'Authorization information is missing or invalid',
            },
            403: {
              description: 'Forbbiden',
            },
            404: {
              description: 'Resource not found',
            },
            500: {
              description: 'Internal server error',
            },
          },
        },
      },
      '/orders': {
        get: {
          summary: 'Get all order by User',
          tags: ['Orders'],
          responses: {
            200: {
              description: 'A JSON object containing order by user',
            },
            401: {
              description: 'Authorization information is missing or invalid',
            },
            403: {
              description: 'Forbbiden',
            },
            500: {
              description: 'Internal server error',
            },
          },
        },
      },
      '/order': {
        post: {
          summary: 'Add new order in the system with your account',
          tags: ['Orders'],
          description: '',
          parameters: [
            {
              description: 'id of doctor to post in the order',
              in: 'query',
              name: 'id doctor',
              required: true,
              schema: {
                type: 'string',
              },
            },
          ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  properties: {
                    address: {
                      type: 'string',
                    },
                    dateOrder: {
                      type: 'string',
                    },
                  },
                  example: {
                    address: 'Cll 34 # 2A - 45',
                    dateOrder: 'December 7, 2021, 8:59:30',
                  },
                },
              },
            },
          },
          responses: {
            200: {
              description: 'successful operation',
            },
            400: {
              description: 'Information is missing or invalid',
            },
            401: {
              description: 'Authorization information is missing or invalid',
            },
            403: {
              description: 'Forbbiden',
            },
            404: {
              description: 'Resource not found',
            },
            500: {
              description: 'Internal server error',
            },
          },
        },
        delete: {
          summary: 'Delete your order in the system',
          tags: ['Orders'],
          description: '',
          parameters: [
            {
              description: 'id of  your order to delete ',
              in: 'query',
              name: 'id order',
              required: true,
              schema: {
                type: 'string',
              },
            },
          ],
          responses: {
            200: {
              description: 'successful operation',
            },
            400: {
              description: 'Information is missing or invalid',
            },
            401: {
              description: 'Authorization information is missing or invalid',
            },
            403: {
              description: 'Forbbiden',
            },
            404: {
              description: 'Resource not found',
            },
            500: {
              description: 'Internal server error',
            },
          },
        },
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Server to document API',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};

module.exports = swaggerOptions;
