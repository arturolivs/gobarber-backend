import IParseMailTemplateDTO from '@shared/container/providers/MailTemplate/dtos/IParseMailTemplateDTO';

export default interface IMailTemplateProvider {
  parse(data: IParseMailTemplateDTO): Promise<string>;
}
