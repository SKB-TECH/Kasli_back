import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import AdresseEntity from './entities/adresse.entity';
import { Repository } from 'typeorm';
import { New_addresse_dto } from './DTO/new_addresse_dto';
import { Update_addresse_dto } from './DTO/update_addresse_dto';

@Injectable()
export class AdresseService {
  constructor(
    @InjectRepository(AdresseEntity)
    private readonly addresseRepository: Repository<AdresseEntity>,
  ) {}

  async find(id: string): Promise<AdresseEntity[]> {
    const adresse = await this.addresseRepository.findBy({ idaddresse: id });
    if (!adresse) {
      throw new NotFoundException(
        `L'addresse correspondante a cet id: ${id} n'existe pas `,
      );
    }
    return adresse;
  }

  // getOne
  async getOne(id: string): Promise<AdresseEntity[]> {
    const addresse = await this.find(id);
    return addresse;
  }
  // findAll addresses
  async gettAll() {
    const adresse = await this.addresseRepository.find();
    if (!adresse) {
      throw new NotFoundException(
        `Aucune addresse retrouve dans votre database !!`,
      );
    }
    return adresse;
  }
  //delete one address
  async deleteOne(id: string) {
    return await this.addresseRepository.delete(id);
  }

  async new(nouveau: New_addresse_dto): Promise<AdresseEntity> {
    const addresse = await this.addresseRepository.save(nouveau);
    if (!addresse) {
      throw new NotAcceptableException("erreur lors d'enregistrement");
    }
    return addresse;
  }

  async update(
    idaddresse: string,
    data_update: Update_addresse_dto,
  ): Promise<AdresseEntity> {
    const addresse = await this.addresseRepository.preload({
      idaddresse,
      ...data_update,
    });
    if (!addresse) {
      throw new NotAcceptableException(' erreur de modification addresse');
    }
    return await this.addresseRepository.save(addresse);
  }
}
