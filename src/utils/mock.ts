export const websites = [
  {
    id: '1',
    name: 'Website 1',
    container: {
      desktop: {
        width: 960,
      },
      mobile: {
        width: 320,
      },
    },
  },
  {
    id: '2',
    name: 'Website 2',
    container: {
      desktop: {
        width: 960,
      },
      mobile: {
        width: 320,
      },
    },
  },
]

export const pages = [
  {
    id: '1',
    layoutId: '1',
    name: 'Page 1',
    sections: [
      {
        id: '1',
        name: 'Section 1',
        desktop: {
          height: 500,
          columns: [
            {
              id: '1',
              span: 12,
            },
            {
              id: '2',
              span: 12,
            },
          ],
        },
        mobile: {
          height: 500,
          columns: [
            {
              id: '1',
              span: 12,
            },
            {
              id: '2',
              span: 12,
            },
          ],
        },
      },
    ],
    elements: [
      {
        id: '1',
        sectionId: '1',
        columnId: '1',
        name: '',
        type: 'button',
        desktop: {
          width: 100,
          height: 50,
          background: {
            type: 'color',
            color: 'red',
          },
          text: {
            value: 'Button',
          },
          zIndex: 1,
          position: {
            x: 100,
            y: 100,
          },
        },
        mobile: {
          width: 100,
          height: 50,
          background: {
            type: 'color',
            color: 'red',
          },
          text: {
            value: 'Button',
          },
          zIndex: 1,
          position: {
            x: 100,
            y: 100,
          },
        },
      },
      {
        id: '2',
        sectionId: '1',
        columnId: '2',
        name: '',
        type: 'button',
        desktop: {
          width: 100,
          height: 50,
          background: {
            type: 'color',
            color: 'yellow',
          },
          text: {
            value: 'Button',
          },
          zIndex: 1,
          position: {
            x: 100,
            y: 100,
          },
        },
        mobile: {
          width: 100,
          height: 50,
          background: {
            type: 'color',
            color: 'yellow',
          },
          text: {
            value: 'Button',
          },
          zIndex: 1,
          position: {
            x: 100,
            y: 100,
          },
        },
      },
    ],
  },
  {
    id: '2',
    layoutId: '1',
    name: 'Page 2',
    sections: [
      {
        id: '1',
        name: 'Section 1',
        desktop: {
          height: 500,
          columns: [
            {
              id: '1',
              span: 12,
            },
            {
              id: '2',
              span: 12,
            },
          ],
        },
        mobile: {
          height: 500,
          columns: [
            {
              id: '1',
              span: 12,
            },
            {
              id: '2',
              span: 12,
            },
          ],
        },
      },
    ],
    elements: [
      {
        id: '1',
        sectionId: '1',
        columnId: '1',
        name: '',
        type: 'button',
        desktop: {
          width: 100,
          height: 50,
          background: {
            type: 'color',
            color: 'blue',
          },
          text: {
            value: 'Button',
          },
          zIndex: 1,
          position: {
            x: 100,
            y: 100,
          },
        },
        mobile: {
          width: 100,
          height: 50,
          background: {
            type: 'color',
            color: 'green',
          },
          text: {
            value: 'Button',
          },
          zIndex: 1,
          position: {
            x: 100,
            y: 100,
          },
        },
      },
      {
        id: '2',
        sectionId: '1',
        columnId: '2',
        name: '',
        type: 'button',
        desktop: {
          width: 100,
          height: 50,
          background: {
            type: 'color',
            color: 'yellow',
          },
          text: {
            value: 'Button',
          },
          zIndex: 1,
          position: {
            x: 100,
            y: 100,
          },
        },
        mobile: {
          width: 100,
          height: 50,
          background: {
            type: 'color',
            color: 'yellow',
          },
          text: {
            value: 'Button',
          },
          zIndex: 1,
          position: {
            x: 100,
            y: 100,
          },
        },
      },
    ],
  },
]
