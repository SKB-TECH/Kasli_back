import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Patch,
  Param,
} from '@nestjs/common';
import { AdresseService } from './adresse.service';
import { New_addresse_dto } from './DTO/new_addresse_dto';
import AdresseEntity from './entities/adresse.entity';
import { Update_addresse_dto } from './DTO/update_addresse_dto';

@Controller('kasli_api/addresse')
export class AdresseController {
  constructor(private readonly addresseService: AdresseService) {}
  //add addresse
  @Post('new_addresse')
  async new(@Body() addresse: New_addresse_dto): Promise<AdresseEntity> {
    return await this.addresseService.new(addresse);
  }
  // update addresse
  @Patch('update_addresse/:id')
  async update(
    @Body() addresseModif: Update_addresse_dto,
    @Param('id') id: string,
  ): Promise<AdresseEntity> {
    return await this.addresseService.update(id, addresseModif);
  }
  //delete addresse
  @Delete('delete_addresse/:id')
  async delete(@Param('id') id: string) {
    return await this.addresseService.deleteOne(id);
  }
}
