import { UserModel } from '../../_entities/user.model';
import { ResLoginDTO } from '../dto/res/login.dto';

export function mapUserToResponse(user: UserModel): ResLoginDTO {
  return {
    email: user.email,
  };
}
