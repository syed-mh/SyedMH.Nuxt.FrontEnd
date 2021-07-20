export default function (REQUEST, RESPONSE, NEXT) {
  const _redirects = [
    {
      to: '/projects',
      from: [
        '/project',
        '/projects/technology',
        '/projects/project_category',
        '/projects/project_type',
      ],
    },
  ]

  const _redirect = _redirects.find((_route) =>
    _route.from.find((_from) => _from === REQUEST.url)
  )

  if (_redirect) {
    RESPONSE.writeHead(301, { Location: _redirect.to })
    RESPONSE.end()
  } else {
    NEXT()
  }
}
