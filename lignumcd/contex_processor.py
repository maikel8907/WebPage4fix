# Variable global para mantener activo el item en el navBar, sitios
def url(request):
    value = {'url': request.path}
    return value
