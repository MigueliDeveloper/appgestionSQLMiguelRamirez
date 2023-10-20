import {
    CreationOptional,
    DataTypes,
    InferCreationAttributes,
    InferAttributes,
    Model,
    Sequelize
} from 'sequelize'
  
  export class Curso extends Model<
    InferAttributes<Curso>,
    InferCreationAttributes<Curso>
  > {
    declare id: CreationOptional<number>
    declare nombre: string | null
    declare temas: string | null
    declare descripcion: string | null
    declare categoria: string | null
    declare duracion: string | null
    declare createdAt: CreationOptional<Date>
    declare updatedAt: CreationOptional<Date>
    
    static initModel(sequelize: Sequelize): typeof Curso {
      Curso.init({
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          unique: true
        },
        nombre: {
          type: DataTypes.STRING(60)
        },
        temas: {
          type: DataTypes.TEXT
        },
        descripcion: {
          type: DataTypes.STRING(80)
        },
        categoria: {
          type: DataTypes.STRING(60)
        },
        duracion: {
          type: DataTypes.STRING(60)
        },
        createdAt: {
          type: DataTypes.DATE
        },
        updatedAt: {
          type: DataTypes.DATE
        }
      }, {
        sequelize
      })
      
      return Curso
    }
  }