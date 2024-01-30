import { JwtService } from '@nestjs/jwt';

export const getRequest = (req: any, jwtService: JwtService) => {
  const jwt = req.headers.authorization.replace('Bearer ', '');
  const json = jwtService.decode(jwt, { json: true }) as {
    uuid: string;
  };

  return json;
};
